import { ReactNode } from "react";
import "./assets/title.scss";

interface Props{
    readonly className?: string;
    readonly children: ReactNode;
}

export default function Title({children, className}:Props){
    return (
        <div className={`${className} title-container`}>
            <h1>{children}</h1>
        </div>
    )
}