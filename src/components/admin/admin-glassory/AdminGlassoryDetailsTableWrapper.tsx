import { useCallback, useEffect, useMemo, useState } from "react";
import Button from "../../button/Button";
import TabPage from "../../tabs/TabPage";
import AdminGlassoryDetailsTable from "./AdminGlassoryDetailsTable";
import { useGlossaryApiContext } from "../../../api/glossary/GlossaryApiContext";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

interface Props{
    readonly backToGlossares: () => void;
    readonly editGlossaryDetials: (value: any) => void;
    readonly createDetails: () => void;
}

export default function AdminGlassoryDetailsTableWrapper({
    backToGlossares,
    createDetails,
    editGlossaryDetials
}:Props){

    const { GlossaryApi } = useGlossaryApiContext();
    const [search, setSearch] = useSearchParams();
    const [data, setData] = useState([])
    const glossaryId = useMemo(()=>search.get("glossaryId")?Number(search.get("glossaryId")):"",[search])

    useEffect(()=>{
        if(glossaryId){
            GlossaryApi.getAllGlossaryDetails(glossaryId).then((response: any)=>{
                setData(response.data.data)
            }).catch((error: any)=>{
                toast.error(error.message)
            })
        }
    },[GlossaryApi, setData])

    const deleteGlossaryDetials = useCallback((value: any)=>{
        const id = Number(value.id);
        GlossaryApi.deleteGlossaryDetails(id).then(()=>{
            toast.success("Deleted!")
            window.location.reload();
        }).catch(()=>{
            toast.error("Not Deleted!")
        })
    },[GlossaryApi, toast])

    return (
        <TabPage
            childrenClassName="p-3"
            headerComponent={
                <div className="d-flex justify-content-between">
                    <Button
                        onClick={createDetails}
                        className="px-3 py-1 text-light bg-warning"
                        >
                        Create New Glossary Details
                    </Button>
                    <Button
                        onClick={backToGlossares}
                        className="px-3 py-1 text-light bg-warning"
                        >
                        Back to Glossares
                    </Button>
                </div>
            }
            >
            <AdminGlassoryDetailsTable
                deleteGlossaryDetials={deleteGlossaryDetials}
                editGlossaryDetials={editGlossaryDetials}
                data={data}
                />
        </TabPage>
    )
}