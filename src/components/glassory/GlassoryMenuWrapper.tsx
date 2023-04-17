import { useNavigate } from "react-router-dom";
import Title from "../ui/Title";
import Card from "../ui/Card";

export default function GlassoryMenuWrapper(){

    const navigater = useNavigate();


    return (
        <div className="container">
                <Title>
                    Glassorylar
                </Title>
                <div className="row">
                <div className="col-3">
                    <Card setEntity={(value: any)=>navigater("/glassory")}/>
                </div>
            </div>
        </div>
    )
}