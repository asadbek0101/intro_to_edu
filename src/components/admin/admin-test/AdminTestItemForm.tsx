import { Form, Formik } from "formik";
import InputField from "../../form/InputField";
import { object, string } from "yup";
import TextAreaField from "../../form/TextAreaField";
import { useCallback, useState } from "react";
import Button from "../../button/Button";
import GroupBox from "../../app/GroupBox";
import { update } from "immupdate";
import CheckBox from "../../form/CheckBox";
import InputGroup from "../../app/InputGroup";

const validationSchema = object({
    question: string().required("Required")
})

interface Props{
    readonly submit: (value: any) => void;
    readonly cancel: () => void;
    readonly initialValues: any;
    readonly setInitialValues: (value: any) => void;
}

export default function AdminTestItemForm({
    initialValues,
    setInitialValues,
    submit,
    cancel, 
}:Props){
    
    const onChangeQuestion = useCallback((value: any)=>{
        setInitialValues((prev: any)=>update(prev, {
            question: value
        }))
    },[setInitialValues])

    const addAnswer = useCallback(()=>{ 
        const newAnswer: any = {
            isRight: false,
            answer: ""
        }
        let oldAnswers: any = [...initialValues.answers]
        oldAnswers.push(newAnswer)
        setInitialValues((prev: any)=>update(prev, {
            answers: oldAnswers,
        }))
    },[setInitialValues, initialValues.answers])

    const onChangeAnswer = useCallback((value: any, index: number)=>{
        let oldAnswers: any = [...initialValues.answers]
        oldAnswers[index].answer = value;
        setInitialValues((prev: any)=>update(prev, {
            answers: oldAnswers,
        }))
    },[setInitialValues, initialValues.answers])

    const onChangeCorrect = useCallback((value: any, index: number)=>{
        let oldAnswers: any = [...initialValues.answers]
        oldAnswers[index].isRight = value;
        setInitialValues((prev: any)=>update(prev, {
            answers: oldAnswers,
        }))
    },[setInitialValues, initialValues.answers])

    console.log(initialValues)

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={()=>submit(initialValues)}
            >
            {()=>(
                    <Form>
                       <div className="row">
                        <div className="col-8">
                            <GroupBox title="New Question">
                               <div className="row">
                                <div className="col-12">
                                    <TextAreaField label="Question" name="title" value={initialValues.title} onChange={(event: any)=>onChangeQuestion(event.target.value)}/>
                                    {initialValues && initialValues.answers.map((item: any, index: number)=>{
                                        return (
                                            <InputGroup label={`Answer ${index + 1}`} className="my-2">
                                                <CheckBox name={`isRight${index}`} value={item.isRight} onChange={(value: any)=>onChangeCorrect(value, index)}/>
                                                <InputField 
                                                key={index}
                                                value={item.answer}
                                                name={`answer${index}`}
                                                className="border-0 w-100"
                                                onChange={(event: any)=>onChangeAnswer(event.target.value, index)}
                                                />
                                            </InputGroup>
                                        )
                                    })}
                                </div>
                                <div className="col-12 mt-2 d-flex gap-1 justify-content-end">
                                    <Button 
                                        className="bg-danger px-2 py-1 text-light"
                                        onClick={()=>cancel()}
                                        >
                                        Cancel
                                    </Button>
                                    <Button 
                                        className="bg-warning px-2 py-1 text-light"
                                        onClick={()=>addAnswer()}
                                        >
                                        Add Answer
                                    </Button>
                                    <Button 
                                        className="bg-success px-2 py-1 text-light"
                                        type="submit"
                                        >
                                        Save Question
                                    </Button>
                                </div>
                               </div>
                            </GroupBox>
                        </div>
                       </div>
                    </Form>
            )}
        </Formik>
    )
}