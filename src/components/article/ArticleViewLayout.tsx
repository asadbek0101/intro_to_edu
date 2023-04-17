import { useParams, useSearchParams } from "react-router-dom";
import { ReactNode, useMemo } from "react";
import "./assets/article-view-layout.scss";
import MenuItemIcon from "../icons/MenuItemIcon";

interface Props{
    readonly children: ReactNode;
    readonly articleTitleArray: any;
    readonly articleMenuArray: any;
    readonly setMenu: (value: any) => void;
    readonly setTitle: (value: any) => void;
}

export default function ArticleViewLayout({
        children, 
        articleTitleArray, 
        articleMenuArray,
        setMenu,
        setTitle
    }:Props){

    const [ search, setSearch ] = useSearchParams();

    const { tab = "jewelery" } = useParams();
    const id = useMemo(()=>search.get("articleId")? Number(search.get("articleId")): 1,[search])


    return (
        <div className="article-view-layout">
            <div className="article-view-sidebar">
                {articleMenuArray && articleMenuArray.map((menu: any)=>{
                    return (
                        <div className="article-menu-container">
                            <div className={`article-menu ${tab === menu? "custom-active-menu": ""}`} onClick={()=>setMenu(menu)}>
                                <span>
                                    {menu.toUpperCase()}
                                </span>
                                <span>
                                    <MenuItemIcon color={tab === menu? "white": "black"}/>
                                </span>
                            </div>
                            <div className="article-title-container">
                                {articleTitleArray &&  articleTitleArray.map((title: any)=>{
                                   if(menu === title.category){
                                    return (
                                        <div className={`article-title ${id === title.id?'custom-active-title':''}`} onClick={()=>setTitle(title)}>
                                            {title.title}
                                        </div>
                                    )
                                   }
                                })}
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