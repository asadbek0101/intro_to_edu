import { Outlet } from "react-router-dom";
import AppLayout from "../../components/app/AppLayout";

export default function UserContainer(){
    return (
        <AppLayout>
           <Outlet/>
        </AppLayout>
    )
}