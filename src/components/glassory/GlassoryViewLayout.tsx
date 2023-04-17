import { useParams, useSearchParams } from "react-router-dom";
import { ReactNode, useMemo } from "react";
import "./assets/article-view-layout.scss";

interface Props{
    readonly children: ReactNode;
    readonly glassoryMenuArray: any;
    readonly setMenu: (value: any) => void;
}

export default function GlassoryViewLayout({
        children, 
        glassoryMenuArray,
        setMenu,
    }:Props){


    const { tab = 1 } = useParams();


    return (
        <div className="article-view-layout">
            <div className="article-view-sidebar">
                {glassoryMenuArray && glassoryMenuArray.map((menu: any)=>{
                    return (
                        <div className="article-menu-container">
                            <div className={`article-menu ${Number(tab) === menu.id? "custom-active-menu": ""}`} onClick={()=>setMenu(menu)}>
                                <span>
                                    {menu.title}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="article-view-body">
                {children}
            </div>
        </div>
    )
}