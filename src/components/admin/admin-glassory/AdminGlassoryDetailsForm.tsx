import {useCallback, useRef, useState} from "react";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { update } from "immupdate";
import GroupBox from "../../app/GroupBox";
import InputField from "../../form/InputField";
import Button from "../../button/Button";
import Texteditor from "../../ui/TextEditor";
import Title from "../../ui/Title";
import Text from "../../ui/Text";

interface RoleFormProps{
    readonly initialValues: any;
    readonly setInitialValues: (value: any) => void;
    readonly submit: (value: any) => void;
}

const validationSchema = object({
    title: string().required("Required!"),
})

export default function AdminGlassoryDetailsForm({
    initialValues, 
    setInitialValues, 
    submit
}:RoleFormProps){

    const [isRender, setIsRender] = useState(false);
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
  
  
    const onChangeDefinition = useCallback((value: any)=>{
        setInitialValues((prev: any)=>update(prev, {
            definition: value
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
                     {!isRender && (
                        <>
                               <div className="col-12">
                        <GroupBox title="Article Part">
                           <div className="row">
                            <div className="col-12 mt-2">
                            <InputField
                                label="Name "
                                name="name"
                                value={initialValues.title}
                                onChange={(event: any)=>onChangeTitle(event)}
                                />
                            </div>
                           </div>
                        </GroupBox>
                        </div>
                        <div className="col-12">
                            <GroupBox>
                                    <div className="row">
                                        <div className="col-12">
                                            <Texteditor
                                                value={initialValues.definition}
                                                onChange={(value)=>onChangeDefinition(value)}
                                                height="360px"
                                                />
                                        </div>
                                    </div>
                            </GroupBox>
                        </div>
                        </>
                     )}
                        {isRender && (
                            <div className="col-12">
                                <Title
                                    className="mt-1"
                                    >
                                    {initialValues.title}
                                </Title>
                                <Text
                                    type="html"
                                    >
                                    {initialValues.definition}
                                </Text>
                            </div>
                        )}
                        <div className="col-12 mt-2 d-flex justify-content-end">
                        <Button
                            onClick={()=>setIsRender(!isRender)} 
                            className="px-3 py-1 text-light bg-success"
                            >
                                {!isRender?"Save":"Edit"}
                        </Button>
                        <Button 
                            className="px-3 py-1 text-light bg-warning ms-2"
                            type="submit">
                            Submit
                        </Button>
                     </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}