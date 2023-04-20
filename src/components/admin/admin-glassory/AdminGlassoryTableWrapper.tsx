import { toast } from "react-toastify";
import { useGlossaryApiContext } from "../../../api/glossary/GlossaryApiContext";
import Button from "../../button/Button";
import TabPage from "../../tabs/TabPage";
import AdminGlassoryTable from "./AdminGlassoryTable";
import { useCallback, useEffect, useState } from "react";

interface Props{
    readonly create: () => void;
    readonly editGlassory: (value: any) => void;
    readonly onChangeGlossary: (value: any) => void;
}

export default function AdminGlassoryTableWrapper({
    create,
    editGlassory,
    onChangeGlossary
}:Props){

    const { GlossaryApi } = useGlossaryApiContext();
    const [glossares, setGlossares] = useState([])

    useEffect(()=>{
        GlossaryApi.getAllGlossares().then((response: any)=>setGlossares(response.data.data)).catch((error: any)=>toast.error(error.message))
    },[GlossaryApi, setGlossares])

    const deleteGlassory = useCallback((value: any)=>{
        const id = Number(value.id)
        GlossaryApi.deleteGlossary(id).then(()=>{
            toast.success("Deleted!");
            window.location.reload();
        }).catch(()=>{
            toast.error("Not Deleted!")
        })
    },[GlossaryApi, toast])

    return (
        <TabPage
            headerComponent={
                <Button
                    className="px-3 py-1 bg-warning text-light"
                    onClick={create}
                    >
                    Create New Glassory
                </Button>
            }
            childrenClassName="p-3"
            >
           <AdminGlassoryTable
                deleteGlassory={deleteGlassory}
                editGlassory={editGlassory}
                data={glossares}
                onChangeGlossary={onChangeGlossary}
                />
        </TabPage>
    )
}