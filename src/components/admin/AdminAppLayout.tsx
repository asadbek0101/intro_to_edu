import { ReactNode } from "react"
import "./assets/admin-app-layout.scss";
import AdminPagesHeader from "../header/AdminPagesHeader";
import { useSelector, useDispatch } from "react-redux";
import { set_menu_status } from "../../redux/action";
import AdminSidebarMenuWrapper from "./AdminSidebarMenuWrapper";
 
interface Props{
    readonly children: ReactNode;
}

export default function AdminAppLayout({children}:Props){

    const menu = useSelector((state: any) =>state.data.menuStatus)
    const dispatch = useDispatch();

    return (
        <div className={`admin-app-layout-container ${menu === "Opened"? "active" : ""}`}>
            <div className="admin-sidebar">
                <AdminSidebarMenuWrapper/>
            </div>
            <div className="admin-pages">
                <div className="admin-pages-header">
                    <AdminPagesHeader setMenuStatus={()=>dispatch(set_menu_status(menu === "Opened" ? "Closed" : "Opened"))}/>
                </div>
                <div className="admin-pages-container">
                    {children}
                </div>
            </div>
        </div>
    )
}