import "./assets/drop-down.scss";
import Button from "../button/Button";
import DotMenuIcon from "../icons/DotMenuIcon";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";
import { useState } from "react";

interface Props{
  readonly delet: () => void;
  readonly edit: () => void;
}

export default function DropDown({delet, edit}:Props){

    const [isMenu, setIsMenu] = useState<boolean>(false)

    window.onclick = function(event: any) {
        if(!event.target.matches('.drop-down-menu-button') && !event.target.matches(`.dot-menu-icon`)){
            setIsMenu(false)
        }
    }

    return (
        <div className="drop-down-layout">
            <Button
                className="p-1 d-flex drop-down-button justify-content-center align-items-center rounded-circle"
                onClick={()=>setIsMenu(!isMenu)}
                >
                <DotMenuIcon color="black"/>
            </Button>
            {isMenu && (
            <div className="drop-down-menu">
                <button className="drop-down-menu-button" onClick={()=>{
                  setIsMenu(false)
                  edit()
                }}> <EditIcon/> Edit</button>
                <button className="drop-down-menu-button" onClick={()=>{
                  setIsMenu(false)
                  delet()
                }}> <DeleteIcon/> Delete </button>
            </div>
            )}
        </div>
    )
}