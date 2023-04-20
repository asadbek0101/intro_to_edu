import { useEffect, useMemo, useState, useCallback } from "react";
import { useArticleApiContext } from "../../../api/article/ArticleApiContext";
import Button from "../../button/Button";
import TabPage from "../../tabs/TabPage";
import AdminArticlePartTable from "./AdminArticlePartTable";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

interface Props{
    readonly create: () => void;
    readonly back: () => void;
    readonly editArticlePart: (value: any) => void;
}

export default function AdminArticlePartTableWrapper({
    create, 
    back,
    editArticlePart
}:Props){

    const { ArticleApi } = useArticleApiContext();
    const [search, setSearch] = useSearchParams();
    const [articleParts, setArticleParts] = useState([])

    const articleId = useMemo(()=>search.get("articleId")?Number(search.get("articleId")):"",[search])

    useEffect(()=>{
        if(articleId){
            ArticleApi.getArticlePartsById(articleId).then((response: any)=>setArticleParts(response.data.data)).catch((error: any)=>toast.error(error.message))
        }
    },[ArticleApi, setArticleParts])

    const deleteArticlePart = useCallback((value: any)=>{
        const articlePartId = Number(value.id)
        ArticleApi.deleteArticlePart(articlePartId).then(()=>{
            toast.success("Deleted!")
            window.location.reload();
        }).catch(()=>{
            toast.error("Not Deleted!")
        })
    },[ArticleApi, toast])

    return (
        <TabPage
            headerComponent={
                <div className="d-flex justify-content-between">
                    <Button
                    onClick={create}
                    className="px-3 py-1 bg-warning text-light"
                    >
                    Create Article Section
                    </Button>
                    <Button
                    onClick={back}
                    className="px-3 py-1 bg-warning text-light"
                    >
                    Back to Article
                    </Button>
                </div>
            }
            childrenClassName="p-3"
            >
            <AdminArticlePartTable
                data={articleParts}
                deleteArticlePart={(value: any)=>deleteArticlePart(value)}
                editArticlePart={editArticlePart}
                />
        </TabPage>
    )
}