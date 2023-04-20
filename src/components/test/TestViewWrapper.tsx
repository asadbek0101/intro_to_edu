import { useState, useEffect, useCallback } from "react";
import TestView from "./TestView";
import TestViewLayout from "./TestViewLayout";
import { TEST_DATA } from "./test";
import { useParams } from "react-router-dom";
import { useTestApiContext } from "../../api/test/TestApiContext";
import { toast } from "react-toastify";

export default function TestViewWrapper(){
    const { tab } = useParams();
    const { TestApi } = useTestApiContext();
    const [testArray, setTestArray] = useState([])

    useEffect(()=>{
        if(tab){
            const body = {
                quizTypeId: Number(tab),
                size: 20,
                level: "string",
                language: "string",
            }
            TestApi.getQuestions(body).then((response: any)=>{
                setTestArray(response.data.data)
            }).catch((error: any)=>{
                toast.error(error.message)
            })
        }
    },[TestApi, tab, setTestArray])

    const checkQuestion = useCallback((question: any, answer: any)=>{
        const data = {
            quizId: Number(tab),
            questionId: question.id,
            answerId: answer.id
        }
        TestApi.checkAnswer(data).then((response: any)=>{
                console.log(response)
        }).catch((error: any)=>{
            toast.error(error.message)
        })
    },[TestApi])

    return (
        <TestViewLayout 
            submitTest={()=>console.log("Tugadi")}
            data={testArray}>
            <TestView 
                data={testArray} 
                setData={setTestArray}
                setCheckQuestion={(value: any, answer)=>checkQuestion(value, answer)}
                />
        </TestViewLayout>
    )
}