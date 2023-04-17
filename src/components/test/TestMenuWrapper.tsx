import { useNavigate } from "react-router-dom";
import Card from "../ui/Card";
import Title from "../ui/Title";

export default function TestMenuWrapper(){
    const navigater = useNavigate();
    return (
        <div className="container">
            <Title>
                Testlar
            </Title>
            <div className="row">
            <div className="col-3">
                    <Card setEntity={(value: any)=>navigater("/test")}/>
                </div>
            </div>
        </div>
    )
}