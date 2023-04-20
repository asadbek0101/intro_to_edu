import { useSearchParams } from "react-router-dom";
import Button from "../../button/Button";
import TabPage from "../../tabs/TabPage";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTestApiContext } from "../../../api/test/TestApiContext";
import { ContainerPageType } from "../../../api/AppDto";
import AdminTestItemForm from "./AdminTestItemForm";
import AdminTestItem from "./AdminTestItem";
import { toast } from "react-toastify";

export enum AdminTestDetailTabs{
    TestList = "test-list",
    TestEdit = "test-edit"
}

interface Props{
    readonly back: () => void;
}

export default function AdminTestDetailsFormWrapper({back}:Props){
    
    const [initialValues, setInitialValues] = useState({
        question: "",
        answers: [],
    })
    const [search, setSearch] = useSearchParams();
    const [checkTest, setCheckTest] = useState<any>([])
    const { TestApi } = useTestApiContext();
    const testId = useMemo(()=>search.get("testId")?search.get("testId"):"",[search])
    const testDetailsId = useMemo(()=>search.get("testDetailsId")?search.get("testDetailsId"):"",[search])
    const page = useMemo(()=>search.get("test")?search.get("test"):AdminTestDetailTabs.TestList,[search])

    useEffect(()=>{
        if(testId){
            TestApi.getQuizQuestions(Number(testId)).then((response: any)=>{
                setCheckTest(response.data.data)
            }).catch((error: any)=>{
                console.log(error)
            })
        }
    },[testId, TestApi, setCheckTest])

    const submit = useCallback((value: any)=>{
        
        if(testDetailsId){
            const data = {
                quizTypeId: testId,
                title: value.question,
                answers: value.answers  
            }
        }else {
            const data = {
                quizTypeId: testId,
                title: value.question,
                answers: value.answers  
            }
            TestApi.createQuizQuestion(data).then((response: any)=>{
                console.log(response)
                search.set("test",AdminTestDetailTabs.TestList);
                setSearch(search);
                window.location.reload()
            }).catch((error: any)=>{
                console.log(error)
            })
        }

    },[TestApi])

    const updateQuestion = useCallback((value: any)=>{
        
    },[])
    
    const deleteQuestion = useCallback((value: any)=>{
            TestApi.deleteQuizQuestion(Number(value.id)).then(()=>{
               toast.success("Deleted!")
               window.location.reload();
            })
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
            {page === AdminTestDetailTabs.TestEdit && (
                <AdminTestItemForm
                    initialValues={initialValues}
                    setInitialValues={setInitialValues}
                    cancel={()=>console.log("dd")}
                    submit={submit}
                    />
            )}
            {page === AdminTestDetailTabs.TestList && (
                <div>
                    {checkTest && checkTest.map((_question: any, index: number)=>{
                        return (
                    <AdminTestItem 
                        question={_question} 
                        key={index} 
                        testNumber={index+1}
                        editQuestion={(value: any)=>updateQuestion(value)}
                        deleteQuestion={(value: any)=>deleteQuestion(value)}
                        />
                        )
                    })}
                </div>
                
            )}
            {page === AdminTestDetailTabs.TestList && (
                <div className="mt-3 d-flex justify-content-end">
                <Button 
                    className="px-3 py-1 bg-warning text-light"
                    onClick={()=>{
                        search.set("test", AdminTestDetailTabs.TestEdit)
                        setSearch(search)
                    }}>
                    Add Question
                </Button>
                <Button 
                    className="px-3 py-1 bg-success ms-3 text-light"
                    onClick={()=>{
                        search.set("pageType", ContainerPageType.Table)
                        setSearch(search)
                    }}>
                    Save Test
                </Button>
            </div>
            )}
        </TabPage>
    )
}