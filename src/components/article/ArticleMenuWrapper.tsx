import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../ui/Title";
import { useGlossaryApiContext } from "../../api/glossary/GlossaryApiContext";
import { useCallback, useEffect, useState } from "react";
import ArticleMenu from "./ArticleMenu";
import { useArticleApiContext } from "../../api/article/ArticleApiContext";
import { toast } from "react-toastify";

export default function GlassoryMenuWrapper(){

    const navigate = useNavigate();
    const { ArticleApi } = useArticleApiContext();
    const [articles, setArticles] = useState([])
    const [search, setSearch] = useSearchParams();

    useEffect(()=>{
        ArticleApi.getAllAricleTitles().then((response: any)=>{
            setArticles(response.data.data)
        }).catch((error: any)=>{
            toast.error(error.message)
        })
    },[ArticleApi, setArticles])

    const onChangeArticle = useCallback((value: any)=>{
        navigate(`/article/${value.id}`)
    },[navigate])

    return (
        <div className="container">
                <Title>
                    Maqolalar
                </Title>
                <ArticleMenu
                    menu={articles}
                    onChangeMenu={onChangeArticle}
                    />
        </div>
    )
}