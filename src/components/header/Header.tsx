import "./assets/header.scss";
import { useCallback, useState } from "react";
import Logo from "../ui/Logo";
import Marquee from "react-fast-marquee";
import Modal from "../modal/Modal";
import AuthFormWrapper from "../auth/AuthFormWrapper";
import { USERS } from "../admin/data/users";
import { useNavigate } from "react-router-dom";

enum RoleType{
    SuperAdmin = "super-admin",
    Admin = "admin",
    User = "user"
}

export default function Header(){

    const [isModal, setIsModal] = useState(false);
    const [users, setUsers] = useState(USERS);
    const [roleType, setRoleType] = useState("");
    const [user, setUser] = useState<any>({});

    const navigator = useNavigate();

    const register = useCallback((value: any)=>{
        let exitsUser = users.filter((user: any)=>user.email === value.email)
        if(exitsUser.length != 0){
            alert("Bu foydalanuvchi bizda bor")
        }else{
            const id: any = users? users[users.length -1 ].id + 1 : 1
            const newUser = {
                ...value,
                id: id,
                createdDate: "17.04.2023",
                updatedDate: "17.04.2023",
                role: "user"
            }
            setUsers([...users, newUser])
        }
    },[users, setUsers])

    const login = useCallback((value: any)=>{
        let exitsUser = users.filter((user: any)=>user.email === value.email && user.password === value.password)[0]
        console.log(exitsUser)
        if(exitsUser.role === "super-admin"){
            setRoleType(RoleType.SuperAdmin)
            setUser(exitsUser)
        }else if(exitsUser.role === "admin"){
            setRoleType(RoleType.Admin)
            setUser(exitsUser)
        }else if(exitsUser.role === "user"){
            setRoleType(RoleType.User)
            setUser(exitsUser)
        }else{
            alert("Nimadir xator kiritildi")
        }
    },[users, setRoleType, RoleType, setUser])


    return (
        <header id="user-header">
            <div className="container">
                <div className="logo-group">
                    {/* <span>Ta'limga Kirish</span> */}
                    <Logo/>
                </div>

                <div className="d-flex align-items-center">
                    <div className="after text-light me-4">
                        <Marquee speed={60} gradient={false} pauseOnHover>
                            <span className="mx-3">D.A. Zaripova</span>
                            <span>N.N. Zaxirova</span>
                        </Marquee>
                    </div>
                    {(roleType === RoleType.SuperAdmin || roleType === RoleType.Admin) && (
                    <button
                        className="login-button"
                        onClick={()=>navigator('/admin/users')}
                        >
                        {user.username}
                    </button>
                    )}
                    <button 
                        className="login-button ms-3"
                        onClick={()=>setIsModal(true)}
                        >
                        Kirish
                    </button>

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
                </div>
            </div>
        </header>
    )
}