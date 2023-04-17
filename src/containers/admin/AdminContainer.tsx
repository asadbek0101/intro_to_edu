import { Outlet } from "react-router-dom";
import AdminAppLayout from "../../components/admin/AdminAppLayout";

export default function AdminContainer(){
    return (
        <AdminAppLayout>
            <Outlet/>
        </AdminAppLayout>
    )
}