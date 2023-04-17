import Button from "../button/Button";
import MenuIcon from "../icons/MenuIcon";
import "./assets/header.scss";

interface Props{
    readonly setMenuStatus: () => void; 
}

export default function AdminPagesHeader({setMenuStatus}:Props){
    return (
        <header id="admin-header">
           <Button className="h-100 px-4" onClick={setMenuStatus}>
                <MenuIcon/>
           </Button>
        </header>
    )
}