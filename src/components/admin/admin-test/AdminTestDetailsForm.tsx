import { useState, useCallback, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../../button/Button";
import AdminTestItemForm from "./AdminTestItemForm";
import AdminTestItem from "./AdminTestItem";
import { ContainerPageType } from "../../../api/AppDto";
import Title from "../../ui/Title";

export enum AdminTestDetailTabs{
    TestList = "test-list",
    TestEdit = "test-edit"
}

interface Props{
    readonly test: any;
}

export default function AdminTestDetailsForm({test}:Props){

    const [questions, setQuestions] = useState<any>()
    const [search, setSearch] = useSearchParams();
    const [selectValue, setSelectValue] = useState<any>();
    const [id, setId] = useState<number>(0)

    useEffect(()=>{
        if(test){
            setQuestions(test.testQuestions);
        }
    },[setQuestions, test])

    console.log(questions)

    const page = useMemo(()=>search.get("test")? search.get("test") :AdminTestDetailTabs.TestList,[search, AdminTestDetailTabs] )

    const addQuestion = useCallback((value: any)=>{
        
        search.set("test",AdminTestDetailTabs.TestList);
        setSearch(search);

        if(selectValue){
            let oldArray = [...questions]
            let index = oldArray.findIndex((item: any)=>item.id === value.id)
            oldArray[index] = value;
            setQuestions(oldArray)
            setSelectValue(null)
        }else{
            setQuestions([...questions, value])
        }

    },[setQuestions, questions, setSearch, setSelectValue])

    const deleteQuestion = useCallback((value: any)=>{
        let oldArray = [...questions]
        let index = oldArray.findIndex((item: any)=>item.id === value.id)
        oldArray.splice(index, 1);
        setQuestions(oldArray)
    },[setQuestions, questions])


    const updateQuestion = useCallback((value: any)=>{
        search.set("test",AdminTestDetailTabs.TestEdit);
        setSearch(search);
        setSelectValue(value);
    },[selectValue, setSearch, search, AdminTestDetailTabs])

    useEffect(()=>{
        let id = questions ? questions[questions.length - 1 ] + 1 : 1
        setId(id);
    },[setId, questions])

    return (
        <div>
            {page === AdminTestDetailTabs.TestEdit && (
                <AdminTestItemForm
                    customId={id}
                    submit={(value:any) => addQuestion(value)}
                    selectValue={selectValue}
                    cancel={()=>{
                        search.set("test",AdminTestDetailTabs.TestList)
                        setSearch(search)
                    }}
                />
            )}
            {page === AdminTestDetailTabs.TestList && (
                <div>
                    <Title
                        className="mt-1"
                        >
                        {test.testTitle}
                    </Title>
                    {questions && questions.map((_question: any, index: number)=>{
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
        </div>
            
    )
}