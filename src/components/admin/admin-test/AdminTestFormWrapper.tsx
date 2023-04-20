import { useCallback, useEffect, useMemo, useState } from "react";
import Button from "../../button/Button";
import TabPage from "../../tabs/TabPage";
import AdminTestForm from "./AdminTestForm";
import { useTestApiContext } from "../../../api/test/TestApiContext";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import { ContainerPageType } from "../../../api/AppDto";

interface Props{
    readonly back: () => void;
}

export default function AdminTestFormWrapper({back}:Props){

    const [initialValues, setInitialValues] = useState({
        name: "",
        description: ""
    })
    const [search, setSearch] = useSearchParams();
    const { TestApi } = useTestApiContext();

    const testId = useMemo(()=>search.get("testId")?Number(search.get("testId")):"",[search])

    useEffect(()=>{
        if(testId){
            TestApi.getTestById(testId).then((response: any)=>{
                setInitialValues(response.data.data)
            }).catch((error: any)=>{
                toast.error(error.message)
            })
        }
    },[TestApi, testId])

    const submit = useCallback((value: any)=>{
        if(testId){
            TestApi.updateTest(value).then(()=>{
                toast.success("Quiz Updated!")
                setSearch({pageType: ContainerPageType.Table})
            }).catch((error: any)=>{
                toast.error(error.message)
            })
        }else{
            TestApi.createTest(value).then(()=>{
                toast.success("Quiz Added!")
                setSearch({pageType: ContainerPageType.Table})
            }).catch((error: any)=>{
                toast.error(error.message)
            })
        }
    },[TestApi, toast])

    return (
        <TabPage
            childrenClassName="p-4"
            headerComponent={
                <Button
                    className="px-3 py-1 bg-warning text-light"
                    onClick={back}
                    >
                    Back
                </Button>
            }
            >
            <AdminTestForm
                initialValues={initialValues}
                setInitialValues={setInitialValues}
                submit={(value: any) => submit(value)}
                />
        </TabPage>
    )
}