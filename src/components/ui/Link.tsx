import "./assets/link.scss";
import { ReactNode } from "react"

interface Props{
    readonly children: ReactNode;
    readonly onClick?: () => void;
    readonly className?: string
}

export default function Link({children, onClick, className}:Props){
    return (
        <div 
            className={`link-contaienr ${className}`}
            >
            <span onClick={onClick}>{children}</span>
        </div>
    )
}