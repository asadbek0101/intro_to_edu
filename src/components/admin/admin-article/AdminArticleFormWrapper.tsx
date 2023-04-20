import { useCallback, useEffect, useMemo, useState } from "react";
import Button from "../../button/Button";
import TabPage from "../../tabs/TabPage";
import AdminArticleForm from "./AdminArticleForm";
import { useArticleApiContext } from "../../../api/article/ArticleApiContext";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ContainerPageType } from "../../../api/AppDto";

interface Props{
    readonly back: () => void;
}

export default function AdminArticleFormWrapper({back}:Props){

    const { ArticleApi } = useArticleApiContext();
    const [search, setSearch] = useSearchParams();
    const [initialValues, setInitialValues] = useState({
        name: ""
    })

    const articleId = useMemo(()=>search.get("articleId")?Number(search.get("articleId")):"",[search])

    useEffect(()=>{
        if(articleId){
            ArticleApi.getArticleTitleById(articleId).then((response: any)=>setInitialValues(response.data.data)).catch((error: any)=>toast.error(error.message))
        }
    },[ArticleApi, articleId, setInitialValues])

    const submit = useCallback((value: any) =>{
        if(articleId){
            ArticleApi.updateArticleTitle(value).then(()=>{
                toast.success("Updated!")
                setSearch({pageType: ContainerPageType.Table})
            }).catch(()=>{
                toast.error("Not Updated!")
            })
        }else {
            ArticleApi.createArticleTitle(value).then(()=>{
                toast.success("Added!")
                setSearch({pageType: ContainerPageType.Table})
            }).catch(()=>{
                toast.error("Not Added!")
            })
        }
    },[ArticleApi, articleId, toast])

    return (
        <TabPage
            childrenClassName="p-4"
            headerComponent={
                <Button className="px-3 py-1 bg-warning text-light"
                    onClick={back}
                    >
                    Back
                </Button>
            }
            >   
            <AdminArticleForm
                initialValues={initialValues}
                setInitialValues={setInitialValues}
                submit={(value: any)=>submit(value)}
                />
        </TabPage>
    )
}