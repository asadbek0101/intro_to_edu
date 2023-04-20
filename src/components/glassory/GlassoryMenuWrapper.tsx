import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../ui/Title";
import { useGlossaryApiContext } from "../../api/glossary/GlossaryApiContext";
import { useCallback, useEffect, useState } from "react";
import GlassoryMenu from "./GlassoryMenu";
import { toast } from "react-toastify";

export default function GlassoryMenuWrapper(){

    const navigate = useNavigate();
    const { GlossaryApi } = useGlossaryApiContext();
    const [glassores, setGlassores] = useState([])
    const [search, setSearch] = useSearchParams();

    useEffect(()=>{
        GlossaryApi.getAllGlossares().then((response: any)=>{
            setGlassores(response.data.data)
        }).catch((error: any)=>{
            toast.error(error.message)
        })
    },[GlossaryApi, setGlassores])

    const onChangeGlassory = useCallback((value: any)=>{
        navigate(`/glassory/${value.id}`)
    },[navigate])

    return (
        <div className="container">
                <Title>
                    Glassorylar
                </Title>
                <GlassoryMenu
                    menu={glassores}
                    onChangeMenu={onChangeGlassory}
                    />
        </div>
    )
}