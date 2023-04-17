import { useNavigate } from "react-router-dom"
import AuthFormWrapper from "../../components/auth/AuthFormWrapper";
import { useCallback } from "react";

export default function AuthContainer(){

    const navigate = useNavigate();

    const checkUserAccount = useCallback((value:any)=>{
        let email = value.email
        let passowrd = value.password
        if(email !== "a@gmail.com" && passowrd !== "asadbek01"){
            alert("User not found")
        }else if(email !== "a@gmail.com" && passowrd === "asadbek01"){
            alert("Wrong Email!")
        }else if(email === "a@gmail.com" && passowrd !== "asadbek01"){
            alert("Wrong Password!")
        }else if(email === "a@gmail.com" && passowrd === "asadbek01"){
            navigate("/admin/users")
        }
    },[navigate])

    return (<AuthFormWrapper submit={(value)=>checkUserAccount(value)}/>)
}