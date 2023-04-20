import { useCallback, useEffect, useMemo, useState } from "react";
import Button from "../../button/Button";
import TabPage from "../../tabs/TabPage";
import AdminLiteratureFor from "./AdminLiteratureForm";
import { useLiteratureApiContext } from "../../../api/literature/LiteratureApiContext";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ContainerPageType } from "../../../api/AppDto";

interface Props{
    readonly back: () => void;
}

export default function AdminLiteratureFormWrapper({back}:Props){

    const { LiteratureApi } = useLiteratureApiContext()
    const [search, setSearch] = useSearchParams();
    const [initialValues, setInitialValues] = useState({
        title: "",
        type: ""
    })

    const literatureId = useMemo(()=>search.get("literatureId")?Number(search.get("literatureId")):"",[])

    useEffect(()=>{
        if(literatureId){
            LiteratureApi.getLiteratureById(literatureId).then((response: any)=>{
                const data = {
                    title: response.data.data.title,
                    type: response.data.data.literatureType
                }
                setInitialValues(data);
            }).catch((error: any)=>toast.error(error.message))
        }
    },[LiteratureApi, setInitialValues])

    

    const submit = useCallback((value: any)=>{
        if(literatureId){
            const data = {
                title: value.title,
                literatureType: value.type,
            }
            LiteratureApi.updateLiterature(data).then(()=>{
                toast.success("Updated!")
                setSearch({pageType: ContainerPageType.Table})
        }).catch(()=>toast.error("Fail!"))
        }else{
            const data = {
                title: value.title,
                literatureType: value.type,
            }
            LiteratureApi.createLiterature(data).then(()=>{
                toast.success("Added!")
                setSearch({pageType: ContainerPageType.Table})
            }).catch(()=>toast.error("Fail!"))
        }
    },[LiteratureApi, literatureId, toast])

    console.log(initialValues)
    return (
        <TabPage
            childrenClassName="p-4"
            headerComponent={
                <Button
                    onClick={back}
                    className="px-3 py-1 text-light bg-warning"
                    >
                    Back
                </Button>
            }
            >
            <AdminLiteratureFor
                initialValues={initialValues}
                setInitialValues={setInitialValues}
                submit={(value: any) =>submit(value)}
                />
        </TabPage>
    )
}