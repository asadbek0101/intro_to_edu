import "./assets/app-dashboard.scss";
import { ReactNode } from "react";

export interface AppDashboardMenuProps{
    readonly title: string,
    readonly id: string,
}

interface Props{
    readonly children: ReactNode;
    readonly menu: AppDashboardMenuProps[];
    readonly onChangeTab: (id: string) => void;
    readonly activeTab: string;
}

export default function AppDashboard({
    children,
    menu,
    onChangeTab,
    activeTab
}:Props){
    return (
        <div className="app-dashboard-layout">   
            <div className="app-dashboard-menu-wrapper">
                <div className="app-dashboard-menu">
                    {menu && menu.map((menuItem: AppDashboardMenuProps, index: number)=>{
                        return (
                            <div 
                                key={index}
                                className={`app-dashboard-menu-item ${activeTab === menuItem.id ? "active-dashboard-menu-item" : ""}`}
                                onClick={()=>onChangeTab(menuItem.id)}
                                >
                                <span>{menuItem.title}</span>
                            </div>
                        )
                    }) }
                </div>
            </div>
            <div className="app-dashboard-content-wrapper">
                <div className="app-dashboard-content">
                    {children}
                </div>
            </div>
        </div>
    )
}