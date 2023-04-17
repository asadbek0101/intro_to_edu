import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

import "./assets/menu-item.scss";
import { useSelector } from "react-redux";

interface Props{
    readonly children: ReactNode;
    readonly to: string;
    readonly icon?: ReactNode; 
}

export default function MenuItem({children, icon, ...LinkProps}:Props){

    const menu = useSelector((state: any) =>state.data.menuStatus)
    
    return (
        <NavLink   className={({ isActive }) =>
            isActive ? "active-link menu-item-container" : "menu-item-container"
            } {...LinkProps}>
            {icon && (
                <div className="menu-item-icon">
                    {icon}
                </div>
            )}
            {menu === "Closed" && (
                <span className="menu-item-title">
                    {children}
                </span>
           )}
        </NavLink>
    )
}