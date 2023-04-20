import { useEffect, useState, useMemo, useCallback } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useGlossaryApiContext } from "../../api/glossary/GlossaryApiContext";
import ArticleView from "./ArticleView";
import { useArticleApiContext } from "../../api/article/ArticleApiContext";
import { toast } from "react-toastify";

export default function GlassoryViewWrapper(){

    const { ArticleApi } = useArticleApiContext();
    const [search, setSearch] = useSearchParams();
    const [articleDetailsMenu, setArticleDetailsMenu] = useState<any>([])
    const [articleDetails, setArticleDetails] = useState<any>({})

    const articleId:any = useMemo(()=>search.get("articleId")? Number(search.get("articleId")):"",[search])
    const articleDetailsId:any = useMemo(()=>search.get("articleDetailsId")? Number(search.get("articleDetailsId")):"",[search])

    const { tab } = useParams();


    useEffect(()=>{
        if(tab){
            ArticleApi.getArticlePartsById(Number(tab)).then((response: any)=>{
                response.data.data.map((menu: any)=>{
                    const data = {
                        title: menu.name,
                        id: menu.id
                    }
                    setArticleDetailsMenu((prev: any)=>[...prev, data])
                })
            }).catch((error: any)=>{
                toast.error(error.message)
            })
        }
    },[ArticleApi, setArticleDetailsMenu, tab])


    useEffect(()=>{
        if(articleDetailsId){
            ArticleApi.getArticlePartById(articleDetailsId).then((response: any)=>{
                setArticleDetails(response.data.data.articleDTO)
            }).catch((error: any)=>{
                toast.error(error.message)
            })
        }
    },[ArticleApi, setArticleDetails, articleDetailsId])


    return ( <ArticleView 
                setMenu={(id: string)=>{
                    setSearch({articleDetailsId: id})
                }}
                activeTab={tab}
                articleMenus={articleDetailsMenu}
                articleDetails={articleDetails}
        /> )
}