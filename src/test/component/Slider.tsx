import "./assets/style.scss";
import { ReactElement, Children, useState } from "react";
import { SliderItemProps } from "./SliderItem";

interface Props{
    readonly children: ReactElement<SliderItemProps>[] | ReactElement<SliderItemProps>;
}

export default function Slider({children}:Props){

    const [start, setStart] = useState<number>(0);
    const [end, setEnd] = useState<number>(3)

    return (
        <div className="slider-container">
            <div className="slider-header">
                <button onClick={()=>{
                    setEnd(end - 4);
                    setStart(start - 4);
                }}>Prev</button>
                <button onClick={()=>{
                    setEnd(end + 4);
                    setStart(start + 4);
                }}>Next</button>
            </div>
            <div className="slider-body">
                {Children.map(children, (child, index)=>{
                    // if(index >= start && index <= end ){
                        return (
                            <div className="items-container">
                                {child.props.children}
                            </div>
                        )
                    // }
                })}
            </div>
        </div>
    )
}