import { useState, useCallback, useEffect, useMemo } from "react";
import Button from "../../button/Button";
import TabPage from "../../tabs/TabPage";
import { useArticleApiContext } from "../../../api/article/ArticleApiContext";
import { useSearchParams } from "react-router-dom";
import { update } from "immupdate";
import { toast } from "react-toastify";
import { ContainerPageType } from "../../../api/AppDto";
import AdminGlassoryDetailsForm from "./AdminGlassoryDetailsForm";
import { useGlossaryApiContext } from "../../../api/glossary/GlossaryApiContext";

interface Props{
    readonly back: () => void;
}

export default function AdminGlassoryDetailsFormWrapper({back}:Props){

    const { GlossaryApi } = useGlossaryApiContext();
    const [search, setSearch] = useSearchParams();
    const glossaryDetailsId: any = useMemo(()=>search.get("glossaryDetailsId")?Number(search.get("glossaryDetailsId")):"",[search])
    const glossaryId: any = useMemo(()=>search.get("glossaryId")?Number(search.get("glossaryId")):"",[search])
    const [initialValues, setInitialValues] = useState<any>({
        title: "",
        definition: ""
    })

    useEffect(()=>{
        if(glossaryDetailsId){
            GlossaryApi.getGlossaryDetailsById(glossaryDetailsId).then((response: any)=>{
                setInitialValues(response.data.data)
            }).catch((error: any)=>toast.error(error.message))
        }
    },[GlossaryApi, setInitialValues, glossaryDetailsId])

    const submit = useCallback((value: any)=>{
        if(glossaryDetailsId){
            const data = {
                id: glossaryId,
                title: value.title,
                definition: value.definition,
                glossaryTypeId: glossaryId,
              }
              GlossaryApi.updateGlassoryDetails(data).then(()=>{
                toast.success("Updated!")
                search.set("pageType", ContainerPageType.Details)
                search.delete("glossaryDetailsId")
                setSearch(search)
             }).catch(()=>{
                toast.error("Not Updated!")
             })
        }else{
            const data = {
                title: value.title,
                definition: value.definition,
                glossaryTypeId: glossaryId,
              }
              GlossaryApi.createGlassoryDetails(data).then(()=>{
                toast.success("Added!")
                search.set("pageType", ContainerPageType.Details)
                setSearch(search)
             }).catch(()=>{
                toast.error("Not Added!")
             })
        }
    },[GlossaryApi, glossaryDetailsId, toast, setSearch])

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
            }>
            <AdminGlassoryDetailsForm
                initialValues={initialValues}
                setInitialValues={setInitialValues}
                submit={(value: any)=>submit(value)}
                />
        </TabPage>
    )
}