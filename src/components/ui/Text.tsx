import "./assets/text.scss";
import { ReactNode, useEffect, useState } from "react";

interface Props{
    readonly children: ReactNode;
    readonly className?: string;
    readonly textClassName?: string; 
    readonly type?: string; 
}

export default function Text({
    children, 
    className, 
    textClassName,
    type = "text"
}:Props){

    const [textContent,setTextContent] = useState<any>("")

    useEffect(()=>{
            setTextContent(children)
    },[setTextContent, children])

    return (
        <div className={`text-container ${className}`}>
            {type === "text" && (
                <p className={`${textClassName}`}>{textContent}</p>
            )}
            {type === "html" && (
                <p dangerouslySetInnerHTML={{__html: textContent}} className={`${textClassName}`}></p>
            )}
        </div>
    )
}