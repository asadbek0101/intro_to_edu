import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import MenuIcon from "../icons/MenuIcon";
import "./assets/header.scss";

interface Props{
    readonly setMenuStatus: () => void; 
}

export default function AdminPagesHeader({setMenuStatus}:Props){

    const navigator = useNavigate();

    return (
        <header id="admin-header" className="justify-content-between pe-4">
           <Button className="h-100 px-4" onClick={setMenuStatus}>
                <MenuIcon/>
           </Button>
           <Button 
                onClick={()=>navigator('/')}
                className="text-light px-3 h-100">
                Back To
           </Button>
        </header>
    )
}