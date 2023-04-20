import {useCallback, useRef} from "react";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { update } from "immupdate";
import GroupBox from "../../app/GroupBox";
import InputField from "../../form/InputField";
import Button from "../../button/Button";
import SelectPicker from "../../form/SelectPicker";

interface RoleFormProps{
    readonly initialValues: any;
    readonly setInitialValues: (value: any) => void;
    readonly submit: (value: any) => void;
}

const validationSchema = object({
    title: string().required("Required!"),
    type: string()
})

const options = [
    {label: "Literature", value: "LITERATURE"},
    {label: "Addition Literature", value: "ADDITION_LITERATURE"},
]

export default function AdminLiteratureFor({
    initialValues, 
    setInitialValues, 
    submit
}:RoleFormProps){

    const inqFormRef = useRef<any>(null);

    const inqFormRefHandler = useCallback((instance: any)=>{
        if(instance){
            inqFormRef.current = instance
        }
    },[inqFormRef])

    const onChangeTitle = useCallback((value: any)=>{
        setInitialValues((prev: any)=>update(prev, {
            title: value.target.value
        }))
    },[setInitialValues])
    
    const onChangeType = useCallback((value: any)=>{
        setInitialValues((prev: any)=>update(prev, {
            type: value.value
        }))
    },[setInitialValues])

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={()=>submit(initialValues)}
            innerRef={inqFormRefHandler}
            >
            {()=>(
                <Form>
                    <div className="row">
                        <div className="col-6">
                        <GroupBox title="New User">
                           <div className="row">
                            <div className="col-12 mt-2">
                            <InputField
                                label="Article Title"
                                name="title"
                                value={initialValues.title}
                                onChange={(event: any)=>onChangeTitle(event)}
                                />
                            </div>
                            <div className="col-12 mt-2">
                            <SelectPicker
                                label="Aritcle Type"
                                name="type"
                                defaultValue={initialValues.type}
                                options={options}
                                onChange={(event: any)=>onChangeType(event)}
                                />
                            </div>
                           </div>
                        </GroupBox>
                        </div>
                        <div className="col-12 mt-3">
                            <Button type="submit" className="text-light bg-warning px-2 py-1">
                                Submit
                            </Button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}