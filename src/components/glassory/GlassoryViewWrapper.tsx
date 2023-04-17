import { useEffect, useState, useMemo, useCallback } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import GlassoryView from "./GlassoryView";
import axios from "axios";

export default function GlassoryViewWrapper(){

    const [ articleMenus, setArticleMenu ] = useState([]);
    const [ articleDetails, setArticleDetails ] = useState({});
    const [ search, setSearch ] = useSearchParams();

    const { tab = 1 } = useParams();

    const navigator = useNavigate();

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products`).then((response:any)=>setArticleMenu(response.data)).catch((error: any)=>console.log(error))
    },[axios, setArticleMenu]);

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${tab}`).then((response:any)=>setArticleDetails(response.data)).catch((error: any)=>console.log(error))
    },[axios, setArticleDetails, tab]);

    const setMenu = useCallback((value: any)=>{
        navigator(`/glassory/${value.id}`)
    },[navigator])

    return ( <GlassoryView 
                glassoryDetails={articleDetails} 
                glassoryMenus={articleMenus} 
                setMenu={(value)=>setMenu(value)}
                /> )
}