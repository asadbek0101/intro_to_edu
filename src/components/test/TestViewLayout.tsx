import { ReactNode, useCallback } from "react"
import "./assets/test-view-layout.scss";
import Button from "../button/Button";

interface Props{
    readonly children: ReactNode;
    readonly data: any;
    readonly submitTest: () => void;
}

export default function TestViewLayout({
    children, 
    data,
    submitTest
}:Props){

    const isCheckendFunc = useCallback((value: any)=>{
        let found = value.answers.filter((item: any)=>item.isRight)
        return found.length > 0
    },[])

    return (
        <div className="test-view-layout">
            <div className="container"> 
                <div className="row mt-3">
                <div className="col-8 test-view-layout-childern">
                    {children}
                </div>
                <div className="col-4 mt-3">
                    <div className="count-view d-flex">
                        {data.questions && data.questions.map((item: any, index: number)=>{
                            return (
                                <div key={index} className={`count-item ${isCheckendFunc(item)? "custom-active-count-item": ""}`}>
                                    <span>{index + 1}</span>
                                </div>
                            )
                        })}
                    </div>
                    <div className="button-group">
                        <Button 
                            onClick={submitTest}
                            className="rounded-0 w-100 text-light bg-default mt-2 py-2 hover-none">Tugatish</Button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}