import { useCallback } from "react";
import Title from "../ui/Title";
import TestViewItem from "./TestViewItem";
import { update } from "immupdate";

interface Props{
    readonly data: any;
    readonly setData: (value: any) => void;
}

export default function TestView({data, setData}:Props){

    const onChangeAnswer = useCallback((question: any, answer: any)=>{

        let oldTest:any = {...data};
        let checkQuestion = oldTest.testQuestions.filter((item: any)=>item.id === question.id)[0]; 
        let questionIndex = oldTest.testQuestions.findIndex((item: any)=>item.id === question.id);
        let checkAnswer = checkQuestion.answers.map((item: any)=>item.isCheckend = false);
        checkAnswer = checkQuestion.answers.filter((item: any)=>item.id === answer.id)[0];
        let answerIndex = checkQuestion.answers.findIndex((item: any)=>item.id === answer.id);
        
        checkAnswer.isCheckend = true;
        checkQuestion.answers[answerIndex] = checkAnswer;
        oldTest.testQuestions[questionIndex] = checkQuestion;

        setData(oldTest)

    },[setData, data])

    return (
        <div>
            <Title className="text-start mt-1">
                {data.testTitle}
            </Title>
            <div>
                {data.testQuestions && data.testQuestions.map((question: any, index: number)=>{
                    return (
                        <TestViewItem 
                            key={index} 
                            testNumber={index+1}
                            question={question}
                            onChangeAnswer={(question, answer)=>onChangeAnswer(question, answer)}
                            />
                    )
                })}
            </div>
        </div>
    )
}