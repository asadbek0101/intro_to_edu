import { ReactNode } from "react";
import "./assets/admin-sidebar-layout.scss";
import { useSelector } from "react-redux";

interface Props{
    readonly children: ReactNode;
}

export default function AdminSidebarLayout({children}:Props){

    const menu = useSelector((state: any) =>state.data.menuStatus)

    return (
        <div className="admin-sidebar-layout">
                <div className="admin-sidebar-header">
                    {menu === "Closed" && (
                        <span>
                            Admin
                        </span>
                    )}
                </div>
                <div className="admin-sidebar-menu">
                    {children}
                </div>
        </div>
    )
}