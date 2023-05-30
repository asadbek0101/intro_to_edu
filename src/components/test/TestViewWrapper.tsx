import { useState, useEffect, useCallback } from "react";
import TestView from "./TestView";
import TestViewLayout from "./TestViewLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useTestApiContext } from "../../api/test/TestApiContext";
import { toast } from "react-toastify";
import { request } from "../../api/request";
import Modal from "../modal/Modal";
import Text from "../ui/Text";
import Button from "../button/Button";

export default function TestViewWrapper(){
    const { tab } = useParams();
    const { TestApi } = useTestApiContext();
    const [testArray, setTestArray] = useState<any>([])
    const [testId, setTestId] = useState(0);
    const navigate = useNavigate();
    const [showResultModal, setShowResultModal] = useState(false);
    const [result, setResult] = useState({
            total: 0,
            optional: "",
            result: "",
    });

    useEffect(()=>{
        if(tab){
            const body = {
                quizTypeId: Number(tab),
                size: 10,
                level: "string",
                language: "string",
            }
            TestApi.getQuestions(body).then((response: any)=>{
                setTestArray(response.data.data)
                setTestId(response.data.data.id)
            }).catch((error: any)=>{
                toast.error(error.message)
            })
        }
    },[TestApi, tab, setTestArray, setTestId])

    const checkQuestion = useCallback((question: any, answer: any)=>{
        const data = {
            quizId: testId,
            questionId: question.id,
            answerId: answer.id
        }
        TestApi.checkAnswer(data).then((response: any)=>{
                console.log(testArray)
        }).catch((error: any)=>{
            toast.error(error.message)
        })
    },[TestApi, testId, testArray])

    const submitTest = useCallback(()=>{
        request.get(`/end-quiz/${testId}`)
        .then((response: any)=>{
            const r = {
                ...response.data.data,
                total: testArray?.questions?.length
            }
            setResult(r);
            setShowResultModal(true)
        })
        .catch((error: any)=>console.log(error))
    },[testId, testArray])

    return (
        <TestViewLayout 
            submitTest={submitTest}
            data={testArray}>
            <TestView 
                data={testArray} 
                setData={setTestArray}
                setCheckQuestion={(value: any, answer)=>checkQuestion(value, answer)}
                />
            <Modal
                show={showResultModal}
                closeHandler={()=>setShowResultModal(false)}
                className="d-flex justify-content-center align-items-center"
                width="300px"
                >
                    <div className="p-3">
                        <Text>
                            <strong>{result.optional}</strong>
                        </Text>
                        <Text>
                            Umumiy savollar soni: <strong>{result.total}</strong>
                        </Text>
                        <Text>
                            To'g'ri javoblar soni: <strong>{result.result}</strong>
                        </Text>
                        <div className="d-flex justify-content-center">
                        <Button
                            className="bg-success px-3 py-1 text-light"
                            onClick={()=>{
                                setShowResultModal(false)
                                navigate("/");
                            }}
                            >
                            Ok
                        </Button>
                        </div>
                    </div>
            </Modal>
        </TestViewLayout>
    )
}