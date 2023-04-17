import { ReactNode } from "react"
import "./assets/style.scss"

export interface SliderItemProps{
    readonly children?: ReactNode;
}

export default function SliderItem({children}:SliderItemProps){
    return (
        <div className="slider-item">
            {children}
        </div>
    )
}