import TabPage from "../../tabs/TabPage";
import AdminArticleTable from "./AdminArticleTable";
import { useArticleApiContext } from "../../../api/article/ArticleApiContext";
import { useCallback, useEffect, useState } from "react";
import Button from "../../button/Button";
import { toast } from "react-toastify";

interface Props{
    readonly create: () => void;
    readonly editArticle: (value: any) => void;
    readonly onChangeArticle: (value: any) => void;
}

export default function AdminArticleTableWrapper({
    create,
    editArticle,
    onChangeArticle
}:Props){

    const { ArticleApi } = useArticleApiContext();
    const [articleTitles, setArticleTitles] = useState([])

    useEffect(()=>{
        ArticleApi.getAllAricleTitles().then((response: any)=>setArticleTitles(response.data.data)).catch((error: any)=>toast.error(error.message))
    },[ArticleApi, setArticleTitles])

    const deleteArticle = useCallback((value: any)=>{
        const articleId = Number(value.id);
        ArticleApi.deleteArticleTitle(articleId).then(()=>{
            toast.success("Deleted!")
            window.location.reload();
        }).catch(()=>{
            toast.error("Not Deleted!")
        })
    },[ArticleApi, toast])

    return (
        <TabPage
            childrenClassName="p-2"
            headerComponent={
                <Button 
                    onClick={create}
                    className="px-3 py-1 text-light bg-warning"
                    >
                    Create Article
                </Button>
            }
            >
            <AdminArticleTable
                deleteArticle={(value: any)=>deleteArticle(value)}
                editArticle={(value: any)=>editArticle(value)}
                data={articleTitles}
                onChangeArticle={onChangeArticle}
                />
        </TabPage>
    )
}