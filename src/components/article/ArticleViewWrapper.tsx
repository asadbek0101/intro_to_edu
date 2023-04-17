import { useEffect, useState, useMemo, useCallback } from "react"
import ArticleView from "./ArticleView";
import axios from "axios";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function ArticleViewWrapper(){

    const [ articleTitles, setArticleTitles ] = useState([]);
    const [ articleMenus, setArticleMenu ] = useState([]);
    const [ articleDetails, setArticleDetails ] = useState({});
    const [ search, setSearch ] = useSearchParams();
    const articleId:any = useMemo(()=>search.get("articleId")? Number(search.get("articleId")) : 1 ,[search])
    const { tab = "jewelery" }  = useParams();
    const navigator = useNavigate();

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${tab}`).then((response:any)=>setArticleTitles(response.data)).catch((error: any)=>console.log(error))
    },[axios, setArticleTitles, tab]);  
    
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/categories`).then((response:any)=>setArticleMenu(response.data)).catch((error: any)=>console.log(error))
    },[axios, setArticleMenu]);

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${articleId}`).then((response:any)=>setArticleDetails(response.data)).catch((error: any)=>console.log(error))
    },[axios, setArticleDetails, articleId]);

    const setMenu = useCallback((value: any)=>{
        navigator(`/article/${value}`)
    },[navigator])

    const setTitle = useCallback((value: any)=>{
        search.set("articleId", value.id);
        setSearch(search);
    },[setSearch])

    return ( <ArticleView 
                articleDetails={articleDetails} 
                articleMenus={articleMenus} 
                articleTitles={articleTitles}
                setMenu={(value)=>setMenu(value)}
                setTitle={(value)=>setTitle(value)}
                /> )
}