import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../ui/Card";
import Title from "../ui/Title";
import { useTestApiContext } from "../../api/test/TestApiContext";
import TestMenu from "./TestMenu";

export default function TestMenuWrapper(){
    
    const navigater = useNavigate();
    const [tests, setTests] = useState([])
    const { TestApi } = useTestApiContext();

    useEffect(()=>{
        TestApi.getAllTests().then((response: any)=>{
            setTests(response.data.data)
        }).catch((error: any)=>{
            console.log(error)
        })
    },[TestApi])

    return (
        <div className="container">
            <Title>
                Testlar
            </Title>
            <TestMenu
                menu={tests}
                onChangeMenu={(value: any) => {
                    navigater(`/test/${value.id}`)
                } }
                />
        </div>
    )
}