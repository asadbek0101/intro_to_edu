import { ReactNode } from "react"
import "./assets/admin-container-layout.scss";

interface Props{
    readonly children: ReactNode;
}

export default function AdminContainerLayout({children}:Props){
    return (
        <div className="admin-container-layout">
            {children}
        </div>
    )
}