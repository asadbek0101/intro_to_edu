import { useState, useCallback, useMemo, useEffect } from "react";
import Button from "../../button/Button";
import TabPage from "../../tabs/TabPage";
import AdminGlassoryForm from "./AdminGlassoryForm";
import { useGlossaryApiContext } from "../../../api/glossary/GlossaryApiContext";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import { ContainerPageType } from "../../../api/AppDto";

interface Props{
    readonly back: () => void;
}

export default function AdminGlassoryFormWrapper({back}:Props){

    const { GlossaryApi } = useGlossaryApiContext();
    const [search, setSearch] = useSearchParams();
    const glossaryId = useMemo(()=>search.get("glossaryId")?Number(search.get("glossaryId")):"",[search])
    const [initialValues,setInitialValues] = useState({
        name: ""
    })

    useEffect(()=>{
        if(glossaryId){
            GlossaryApi.getGlossaryById(glossaryId).then((response: any)=>{
                setInitialValues(response.data.data)
            }).catch((error: any)=>{
                toast.error(error.message)
            })
        }
    },[glossaryId, setInitialValues])

    const submit = useCallback((value: any)=>{
        if(glossaryId){
            GlossaryApi.updateGlassory(value).then(()=>{
                toast.success("Updated!");
                setSearch({pageType: ContainerPageType.Table})
            }).catch(()=>{
                toast.error("Not Updated")
            })
        }else{
        GlossaryApi.createGlassory(value).then(()=>{
            toast.success("Added!");
            setSearch({pageType: ContainerPageType.Table})
        }).catch(()=>{
            toast.error("Not Added")
        })
    }},[GlossaryApi, toast, glossaryId])

    return (
        <TabPage
            childrenClassName="p-3"
            headerComponent={
                <Button
                    className="px-3 py-1 bg-warning text-light"
                    onClick={back}
                    >
                    Back
                </Button>
            }
        >
            <AdminGlassoryForm
                initialValues={initialValues}
                setInitialValues={setInitialValues}
                submit={(value: any)=>submit(value)}
                />
        </TabPage>
        )
}