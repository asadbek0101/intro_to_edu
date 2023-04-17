import axios from "axios";
import Title from "../ui/Title";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../ui/Card";

export default function ArticleMenuWrapper(){

    const [article, setArticle] = useState<any>([]);
    const navigater = useNavigate();


    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories').then((response: any)=>setArticle(response.data)).catch((error: any)=>console.log(error))
    },[axios, setArticle])

    const onChangeArticle = useCallback((value: any)=>{
        navigater(`/article/${value}`)
    },[navigater])

    return (
        <div className="container">
            <Title className="mt-1">
                Maqolalar
            </Title>
            <div className="row">
                { article && article.map((item: any)=>{
                    let entity = {
                        title: item.toUpperCase()
                    }
                    return (
                    <div className="col-3">
                        <Card entity={entity} setEntity={(value: any)=>onChangeArticle(value.title.toLowerCase())}/>
                    </div>
                    )
                })
                }
                
            </div>
        </div>
    )
}