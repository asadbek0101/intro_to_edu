import { useCallback } from "react";
import TestViewItem from "./TestViewItem";

interface Props{
    readonly data: any;
    readonly setData: (value: any) => void;
    readonly setCheckQuestion: (question: any, answer: any ) => void;
}

export default function TestView({
    data, 
    setData,
    setCheckQuestion
}:Props){

    const onChangeAnswer = useCallback((question: any, answer: any)=>{

        let oldTest:any = {...data};
        let checkQuestion = oldTest.questions.filter((item: any)=>item.id === question.id)[0]; 
        let questionIndex = oldTest.questions.findIndex((item: any)=>item.id === question.id);
        let checkAnswer = checkQuestion.answers.map((item: any)=>item.isRight = false);
        checkAnswer = checkQuestion.answers.filter((item: any)=>item.id === answer.id)[0];
        let answerIndex = checkQuestion.answers.findIndex((item: any)=>item.id === answer.id);
        
        checkAnswer.isRight = true;
        checkQuestion.answers[answerIndex] = checkAnswer;
        oldTest.questions[questionIndex] = checkQuestion;

        setData(oldTest)
        setCheckQuestion(question, answer)

    },[setData, data, setCheckQuestion])

    return (
            <div>
                {data.questions && data.questions.map((question: any, index: number)=>{
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
    )
}