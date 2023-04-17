import AdminContainerLayout from "../../components/admin/AdminContainerLayout";
import AdminArticleTableWrapper from "../../components/admin/admin-article/AdminArticleTableWrapper";
import AdminArticleTopicTableWrapper from "../../components/admin/admin-article/AdminArticleTopicTableWrapper";

export default function AdminArticlesContainer(){
    return (
        <AdminContainerLayout>
            <AdminArticleTableWrapper/>
        </AdminContainerLayout>
    )
}