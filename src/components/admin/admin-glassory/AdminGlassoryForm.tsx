import { useCallback } from "react";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import GroupBox from "../../app/GroupBox";
import InputField from "../../form/InputField";
import Button from "../../button/Button";
import { update } from "immupdate";

interface Props{
    readonly initialValues: any;
    readonly setInitialValues: (value: any) => void;
    readonly submit: (value: any) => void;
}

const validationSchema = object({
    name: string()
})

export default function AdminGlassoryForm({
    initialValues,
    setInitialValues,
    submit
}:Props){

    const onChangeName = useCallback((value: any)=>{
        setInitialValues((prev: any)=>update(prev, {
            name: value.target.value
        }))
    },[setInitialValues])

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={() => submit(initialValues)}
            >
            {()=>(
                <Form>
                    <div className="row">
                        <div className="col-6">
                            <GroupBox
                                title="New Glossary"
                                >
                                <div className="row">
                                    <div className="col-12">
                                        <InputField 
                                            label="Glossary Title"
                                            name="name"
                                            value={initialValues.name}
                                            onChange={(value: any)=>onChangeName(value)}
                                            />
                                    </div>
                                </div>
                            </GroupBox>
                        </div>
                        <div className="col-12 mt-2">
                            <Button 
                                type="submit"
                                className="px-3 py-1 text-light bg-warning"
                                >
                                Submit
                            </Button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}