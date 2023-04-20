import { useState, useEffect, useCallback } from "react";
import Button from "../../button/Button";
import TabPage from "../../tabs/TabPage";
import AdminTestTable from "./AdminTestTable";
import { useTestApiContext } from "../../../api/test/TestApiContext";
import { toast } from "react-toastify";

interface Props{
    readonly create: () => void;
    readonly onChangeTest: (value: any) => void;
    readonly editTest: (value: any) => void;
}

export default function AdminTestTableWrapper({
    create, 
    onChangeTest,
    editTest
}:Props){

    const [data, setData] = useState([]);
    const { TestApi } = useTestApiContext();

    useEffect(()=>{
        TestApi.getAllTests().then((response: any)=>{
            setData(response.data.data)
        }).catch((error: any)=>{
            toast.error(error.message)
        })
    },[TestApi, setData])

    const deleteTest = useCallback((value: any)=>{
        const id = Number(value.id)
        TestApi.deleteTest(id).then(()=>{
            toast.success("Deleted!")
            window.location.reload()
        }).catch(()=>{
            toast.error("Not Deleted!")
        })
    },[TestApi, toast])

    return (
        <TabPage
            headerComponent={
                <Button 
                    className="px-3 py-1 bg-warning text-light"
                    onClick={create}
                    >
                    Create Test
                </Button>
            }
            childrenClassName="p-2"
            >
            <AdminTestTable 
                data={data} 
                onChangeTest={onChangeTest}
                deleteTest={deleteTest}
                editTest={editTest}
                />
        </TabPage>
    )
}