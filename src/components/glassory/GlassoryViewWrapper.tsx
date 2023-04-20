import { useEffect, useState, useMemo, useCallback } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import GlassoryView from "./GlassoryView";
import { useGlossaryApiContext } from "../../api/glossary/GlossaryApiContext";

export default function GlassoryViewWrapper(){

    const { GlossaryApi } = useGlossaryApiContext();
    const [search, setSearch] = useSearchParams();
    const [glassoryDetailsMenu, setGlassoryDetailsMenu] = useState<any>([])
    const [glassoryDetails, setGlassoryDetails] = useState<any>({})

    const glassoryId:any = useMemo(()=>search.get("glassoryId")? Number(search.get("glassoryId")):"",[search])
    const glassoryDetailsId:any = useMemo(()=>search.get("glassoryDetailsId")? Number(search.get("glassoryDetailsId")):"",[search])

    const { tab } = useParams();


    useEffect(()=>{
        if(tab){
            GlossaryApi.getAllGlossaryDetails(Number(tab)).then((response: any)=>{
                setGlassoryDetailsMenu(response.data.data)
            }).catch((error: any)=>{
                console.log(error)
            })
        }
    },[GlossaryApi, setGlassoryDetailsMenu, tab])


    useEffect(()=>{
        if(glassoryDetailsId){
            GlossaryApi.getGlossaryDetailsById(glassoryDetailsId).then((response: any)=>{
                setGlassoryDetails(response.data.data)
            }).catch((error: any)=>{
                console.log(error)
            })
        }
    },[GlossaryApi, setGlassoryDetails, glassoryDetailsId])


    return ( <GlassoryView 
                glassoryMenus={glassoryDetailsMenu}
                glassoryDetails={glassoryDetails}
                activeTab={glassoryDetailsId}
                setMenu={(id: any)=>{
                    setSearch({glassoryDetailsId: id})
                }}
        /> )
}