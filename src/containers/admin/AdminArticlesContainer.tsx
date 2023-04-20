import { useSearchParams } from "react-router-dom";
import AdminContainerLayout from "../../components/admin/AdminContainerLayout";
import AdminArticleTableWrapper from "../../components/admin/admin-article/AdminArticleTableWrapper";
import { useMemo } from "react";
import { ContainerPageType } from "../../api/AppDto";
import AdminArticleFormWrapper from "../../components/admin/admin-article/AdminArticleFormWrapper";
import AdminArticlePartTableWrapper from "../../components/admin/admin-article/AdminArticlePartTableWrapper";
import AdminArticlePartFormWrapper from "../../components/admin/admin-article/AdminArticlePartFormWrapper";

export default function AdminArticlesContainer(){

    const [search, setSearch] = useSearchParams();

    const page = useMemo(()=>search.get("pageType")? search.get("pageType"): ContainerPageType.Table,[search]);


    return (
        <AdminContainerLayout>
            {page === ContainerPageType.Table && (
                <AdminArticleTableWrapper
                    create={()=>{
                        setSearch({pageType: ContainerPageType.Form})
                    }}
                    editArticle={(value: any)=>{
                        setSearch({pageType: ContainerPageType.Form, articleId: value.id})
                    }}
                    onChangeArticle={(value: any)=>{
                        setSearch({pageType: ContainerPageType.Part, articleId: value.id})
                    }}
                    />
            )}
            {page === ContainerPageType.Form && (
                <AdminArticleFormWrapper
                    back={()=>{
                       setSearch({pageType: ContainerPageType.Table})                        
                    }}
                    />
            )}
            {page === ContainerPageType.Part && (
                <AdminArticlePartTableWrapper
                    create={()=>{
                        search.set("pageType", ContainerPageType.PartForm)
                        setSearch(search)
                    }}
                    back={()=>{
                        setSearch({pageType: ContainerPageType.Table})
                    }}
                    editArticlePart={(value: any)=>{
                        search.set("articlePartId", value.id)
                        setSearch(search)
                        search.set("pageType", ContainerPageType.PartForm)
                        setSearch(search)
                    }}
                    />
            )}
            {page === ContainerPageType.PartForm && (
                <AdminArticlePartFormWrapper
                    back={()=>{
                        search.set("pageType", ContainerPageType.Part)
                        search.delete("articlePartId")
                        setSearch(search)
                    }}
                    />
            )}
        </AdminContainerLayout>
    )
}