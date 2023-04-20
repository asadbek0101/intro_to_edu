import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../ui/Card";
import Title from "../ui/Title";
import { useTestApiContext } from "../../api/test/TestApiContext";
import TestMenu from "./TestMenu";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function TestMenuWrapper(){
    
    const navigater = useNavigate();
    const [tests, setTests] = useState([])
    const { TestApi } = useTestApiContext();
    const profile = useSelector((state: any)=>state.data.profile)

    useEffect(()=>{
        TestApi.getAllTests().then((response: any)=>{
            setTests(response.data.data)
        }).catch((error: any)=>{
            toast.error(error.message)
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
                    if(profile?.roles?.length > 0){
                        navigater(`/test/${value.id}`)
                    }else {
                        toast.warn("Testni ishlash uchun ro'yxatdan o'tishingiz kerak")
                    }
                } }
                />
        </div>
    )
}