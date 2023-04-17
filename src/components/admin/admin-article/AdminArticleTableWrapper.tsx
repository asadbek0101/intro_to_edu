import TabPage from "../../tabs/TabPage";
import AdminArticleTable from "./AdminArticleTable";

export default function AdminArticleTableWrapper(){
    return (
        <TabPage
            childrenClassName="p-2"
            >
            <AdminArticleTable/>
        </TabPage>
    )
}