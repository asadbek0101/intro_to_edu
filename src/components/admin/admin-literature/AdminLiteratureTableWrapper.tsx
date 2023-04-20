import { useCallback, useEffect, useState } from "react";
import { useLiteratureApiContext } from "../../../api/literature/LiteratureApiContext";
import Button from "../../button/Button";
import TabPage from "../../tabs/TabPage";
import AdminLiteratureTable from "./AdminLiteratureTable";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

interface Props{
    readonly create: () => void;
    readonly editLiterature: (value: any) => void;
}

export default function AdminLiteratureTableWrapper({
    create,
    editLiterature
}:Props){

    const { LiteratureApi } = useLiteratureApiContext();
    const [ literatures, setLiteratures] = useState([]);

    useEffect(()=>{
        LiteratureApi.getAllLiteratures().then((response: any)=>setLiteratures(response.data.data))
    },[LiteratureApi, setLiteratures])

    const deleteLiterature = useCallback((value: any)=>{
        const id: number = Number(value.id);
        LiteratureApi.deleteLiterature(id).then(()=>{
            toast.success("Deleted!")
            window.location.reload();
        }).catch(()=>toast.error("Error!"))
    },[LiteratureApi, toast])

    return (
        <TabPage
            headerComponent={
                <Button
                    className="px-3 py-1 text-light bg-warning"
                    onClick={create}
                    >
                    Create Literatura
                </Button>
            }
            childrenClassName="p-3"
            >
                <AdminLiteratureTable
                    data={literatures}
                    deleteLiterature={deleteLiterature}
                    editLiterature={editLiterature}
                    />
        </TabPage>
    )
}