import {useCallback, useRef} from "react";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { update } from "immupdate";
import GroupBox from "../../app/GroupBox";
import InputField from "../../form/InputField";
import Button from "../../button/Button";

interface RoleFormProps{
    readonly initialValues: any;
    readonly setInitialValues: (value: any) => void;
    readonly submit: (value: any) => void;
}

const validationSchema = object({
    fullName: string().required("Required!"),
    email: string().required("Required!"),
    phoneNumber: string().required("Required!"),
    password: string(),
})

export default function RoleManagerForm({initialValues, setInitialValues, submit}:RoleFormProps){

    const inqFormRef = useRef<any>(null);

    const inqFormRefHandler = useCallback((instance: any)=>{
        if(instance){
            inqFormRef.current = instance
        }
    },[inqFormRef])

    const onChangeFullName = useCallback((value: any)=>{
        setInitialValues((prev: any)=>update(prev, {
            fullName: value.target.value
        }))
    },[setInitialValues])
    
    const onChangeEmail = useCallback((value: any)=>{
        setInitialValues((prev: any)=>update(prev, {
            email: value.target.value
        }))
    },[setInitialValues])
    
    const onChangePhoneNumber = useCallback((value: any)=>{
        setInitialValues((prev: any)=>update(prev, {
            phoneNumber: value.target.value
        }))
    },[setInitialValues])
    
    const onChangePassword = useCallback((value: any)=>{
        setInitialValues((prev: any)=>update(prev, {
            password: value.target.value
        }))
    },[setInitialValues])


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={submit}
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
                                label="FullName"
                                name="fullName"
                                value={initialValues.fullName}
                                onChange={(event: any)=>onChangeFullName(event)}
                                />
                            </div>
                            <div className="col-12 mt-2">
                            <InputField
                                label="Email"
                                name="email"
                                value={initialValues.email}
                                onChange={(event: any)=>onChangeEmail(event)}
                                />
                            </div>
                            <div className="col-12 mt-2">
                            <InputField
                                label="Phone Number"
                                name="phoneNumber"
                                value={initialValues.phoneNumber}
                                onChange={(event: any)=>onChangePhoneNumber(event)}
                                />
                            </div>
                            <div className="col-12 mt-2">
                            <InputField
                                label="Password"
                                name="password"
                                value={initialValues.password}
                                onChange={(event: any)=>onChangePassword(event)}
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