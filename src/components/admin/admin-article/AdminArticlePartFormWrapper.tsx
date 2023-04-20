import { useState, useCallback, useEffect, useMemo } from "react";
import Button from "../../button/Button";
import TabPage from "../../tabs/TabPage";
import AdminArticlePartForm from "./AdminArticlePartForm";
import { useArticleApiContext } from "../../../api/article/ArticleApiContext";
import { useSearchParams } from "react-router-dom";
import { update } from "immupdate";
import { toast } from "react-toastify";
import { ContainerPageType } from "../../../api/AppDto";

interface Props{
    readonly back: () => void;
}

export default function AdminArticlePartFormWrapper({back}:Props){

    const { ArticleApi } = useArticleApiContext();
    const [search, setSearch] = useSearchParams();
    const articlePartId: any = useMemo(()=>search.get("articlePartId")?Number(search.get("articlePartId")):"",[search])
    const articleId: any = useMemo(()=>search.get("articleId")?Number(search.get("articleId")):"",[search])
    const [initialValues, setInitialValues] = useState<any>({
        name: "",
        details: ""
    })

    useEffect(()=>{
        if(articlePartId){
            ArticleApi.getArticlePartById(articlePartId).then((response: any)=>{
                setInitialValues((prev: any)=>update(prev, {
                    name: response.data.data.articleTitleDTO.name,
                    details: response.data.data.articleDTO.articleContent
                }))
            }).catch((error: any)=>toast.error(error.message))
        }
    },[ArticleApi, setInitialValues, articlePartId])

    const submit = useCallback((value: any)=>{
        if(articlePartId){
            const data = {
                id: articlePartId,
                name: value.name,
                articleContent: value.details
              }
             ArticleApi.updateArticleTitle(data).then(()=>{
                toast.success("Updated!")
                search.set("pageType", ContainerPageType.Part)
                search.delete("articlePartId")
                setSearch(search)
             }).catch(()=>{
                toast.error("Not Updated!")
             })
        }else{
            const data = {
                name: value.name,
                description: "string",
                articleTypeId: articleId,
                articleCreateDTO: {
                  articleContent: value.details
                }
              }
            ArticleApi.createArticlePart(data).then(()=>{
                toast.success("Added!")
                search.set("pageType", ContainerPageType.Part)
                setSearch(search)
             }).catch(()=>{
                toast.error("Not Added!")
             })
        }
    },[ArticleApi, articlePartId, toast, setSearch])

    return (
        <TabPage
            childrenClassName="p-4"
            headerComponent={
                <Button
                    onClick={back}
                    className="px-3 py-1 text-light bg-warning"
                    >
                    Back
                </Button>
            }>
            <AdminArticlePartForm
                initialValues={initialValues}
                setInitialValues={setInitialValues}
                submit={(value: any)=>submit(value)}
                />
        </TabPage>
    )
}