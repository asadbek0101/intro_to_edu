import React, { ReactNode, useCallback, useState } from "react";
import AuthLayout from "./AuthLayout";
import AuthLoginForm from "./AuthLoginForm";
import AuthRegisterForm from "./AuthRegisterForm";
import { USERS } from "../admin/data/users";

enum FormType{
    Register = "register",
    Login = "login"
}

interface AuthFormWrapperProps{
    readonly register: (value: any) => void;
    readonly login: (value: any) => void;
}

export default function AuthFormWrapper({register, login}:AuthFormWrapperProps){

    const [formType, setFormType] = useState(FormType.Login);
    const [registerInitialValues, setRegisterInitialValues] = useState({ 
        email: "", 
        phoneNumber: "",
        password: "",
        fullName: ""
    });

    const [loginInitialValues, setLoginInitialValues] = useState({ 
        email: "", 
        password: "" 
    });


    return (
        <AuthLayout>
            {formType === FormType.Login && (
                <AuthLoginForm 
                    initialValues={loginInitialValues} 
                    setInitialValues={setLoginInitialValues} 
                    onChangeToRegister={()=>setFormType(FormType.Register)}
                    onSubmit={login}/>
            )}
            {formType === FormType.Register && (
                <AuthRegisterForm 
                    initialValues={registerInitialValues} 
                    setInitialValues={setRegisterInitialValues} 
                    onChangeToLogin={()=>setFormType(FormType.Login)}
                    onSubmit={register}/>
            )}
        </AuthLayout>
    )
}