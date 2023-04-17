import React, {ReactNode} from "react"
import "./assets/app-input-group.scss";

interface Props{
    readonly children: ReactNode;
    readonly label?: string;
    readonly className?: string;
}

export default function InputGroup({children, label, className}:Props){
    return (
        <div className={`input-group-container ${className}`}>
            <div className="input-group-label">
                {label}
            </div>
            <div className="custom-input-group">
                {children}
            </div>
        </div>
    )
}