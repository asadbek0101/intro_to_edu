import { useEffect, useState } from "react";
import "./assets/header-dropdown.scss";

interface Props{
    readonly profile: any;
    readonly handleClick: (value: string) => void;
}

export default function HeaderDropdown({handleClick, profile}:Props){

    const [isRole, setIsRole] = useState<boolean>(false)
    useEffect(()=>{
        let admins = profile.roles && profile.roles.filter((role: string) => (role === "SUPPER_ADMIN" || role === "ADMIN"))
        if(admins.length > 0){
            setIsRole(true)
        }
    },[profile, setIsRole])

    return (
        <div className="dropdown ms-3">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Menu
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            { isRole && (
            <a className="dropdown-item" href="#" onClick={()=>handleClick("Admin")}>Admin</a>
            )}
            <a className="dropdown-item" href="#" onClick={()=>handleClick("Result")}>Natijalar</a>
            <a className="dropdown-item" href="#" onClick={()=>handleClick("Logout")}>Chiqish</a>
        </div>
        </div>
    )
}