import Button from "../../button/Button";
import TabPage from "../../tabs/TabPage";
import AdminUserTable from "./AdminUserTable";

interface Props{
    readonly create: () => void;
}

export default function AdminUserTableWrapper({create}:Props){
    return (
        <TabPage
            childrenClassName="p-1"
            headerComponent={
                <Button 
                    className="bg-warning text-light px-2 py-1"
                    onClick={create}
                    >
                    Create User
                </Button>
            }
            >
            <AdminUserTable/>
        </TabPage>
    )
}