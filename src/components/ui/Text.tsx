import "./assets/text.scss";
import { ReactNode } from "react";

interface Props{
    readonly children: ReactNode;
    readonly className?: string;
    readonly textClassName?: string; 
}

export default function Text({children, className, textClassName}:Props){
    return (
        <div className={`text-container ${className}`}>
            <p className={`${textClassName}`}>{children}</p>
        </div>
    )
}