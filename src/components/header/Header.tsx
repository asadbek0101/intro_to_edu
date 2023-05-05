import "./assets/header.scss";
import { useCallback, useState } from "react";
import Logo from "../ui/Logo";
import Marquee from "react-fast-marquee";
import Modal from "../modal/Modal";
import AuthFormWrapper from "../auth/AuthFormWrapper";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { set_token } from "../../redux/action";
import HeaderDropdown from "./HeadeDropdown";
import axios from "axios";
import { toast } from "react-toastify";
import ResultTableWrapper from "../result/ResultTableWrapper";

enum RoleType{
    SuperAdmin = "super-admin",
    Admin = "admin",
    User = "user"
}

export default function Header(){
    const dispatch = useDispatch();
    const [isModal, setIsModal] = useState(false);
    const [isModalResult, setIsModalResult] = useState(false);
    const profile = useSelector((state: any)=>state.data.profile) 

    const navigator = useNavigate();

    const register = useCallback((value: any)=>{
        axios.post("https://jarvis-jon.uz:8443/api/v1/auth/register", value).then((response: any)=> {
            toast.success("Siz ro'yxatdan o'tdingiz!")
            window.location.reload()
        }).catch((error: any)=>toast.error(error.message))
    },[axios])

    const login = useCallback((value: any)=>{
        axios.post("https://jarvis-jon.uz:8443/api/v1/auth/login", value).then((response: any)=> {
            dispatch(set_token(response.data.data.accessToken))
            window.location.reload()
        }).catch((error: any)=>toast.error(error.message))
    },[dispatch, axios, set_token])

    const handleClick = useCallback((value: any)=>{
        if(value === "Admin"){
            navigator("/admin/users")
        }else if(value === "Main"){
            navigator("/")
        }else if(value === "Result"){
            setIsModalResult(true)
        }else if(value === "Logout"){
            navigator("/")
            localStorage.removeItem("TOKEN")
            window.location.reload()
        }
    },[navigator, localStorage, window])

    return (
        <header id="user-header">
            <div className="container">
                <div className="logo-group">
                    <Logo/>
                </div>

                <div className="d-flex align-items-center">
                    <div className="after text-light me-4">
                        <Marquee speed={60} gradient={false} pauseOnHover>
                            <span className="mx-3">D.A. Zaripova</span>
                            <span>N.N. Zaxirova</span>
                        </Marquee>
                    </div>
                    <button 
                        className="login-button ms-3"
                        onClick={()=>navigator("/")}
                        >
                        Asosiy
                    </button>
                    {profile.roles && (
                        <HeaderDropdown
                            handleClick={(value: any)=>handleClick(value)}
                            profile={profile}
                            />
                    )}
                    {!profile.roles && (
                    <button 
                        className="login-button ms-3"
                        onClick={()=>setIsModal(true)}
                        >
                        Kirish
                    </button>
                    )}
                    <Modal
                        show={isModal}
                        closeHandler={()=>setIsModal(false)}
                        className="d-flex justify-content-end align-item-center"
                        >
                        <AuthFormWrapper
                            register={register}
                            login={login}
                        />
                    </Modal>
                    <Modal
                        show={isModalResult}
                        closeHandler={()=>setIsModalResult(false)}
                        className="d-flex justify-content-center  align-items-center"
                        width="800px"
                        >
                        <ResultTableWrapper/>
                    </Modal>
                </div>
            </div>
        </header>
    )
}