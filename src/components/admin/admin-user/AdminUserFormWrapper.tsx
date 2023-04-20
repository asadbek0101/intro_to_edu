import { useCallback, useEffect, useMemo, useState } from "react";
import Button from "../../button/Button";
import TabPage from "../../tabs/TabPage";
import AdminUserForm from "./AdminUserForm";
import { toast } from "react-toastify"
import { useUserApiContext } from "../../../api/user/UserApiContext";
import { useSearchParams } from "react-router-dom";
import { ContainerPageType } from "../../../api/AppDto";

interface Props{
    readonly back: () => void
}

export default function AdminUserFormWrapper({back}:Props){

    const { UserApi } = useUserApiContext();
    const [search, setSearch] = useSearchParams();

    const userId: any = useMemo(()=>search.get("userId")? Number(search.get("userId")):'',[search])

    const [initialValues, setInitialValues] = useState({
        email: "",
        phoneNumber: "",
        fullName: "",
        password: ""
    })

    useEffect(()=>{
        if(userId){
            UserApi.getUserById(userId).then((response: any)=>setInitialValues(response.data.data)).catch((error: any)=>toast.error(error.message))
        }
    },[UserApi, userId, setInitialValues])

    const submit = useCallback((value: any)=>{
        if(userId){
            const data = {
                id: value.id,
                email: value.email,
                fullName: value.fullName,
                phoneNumber: value.phoneNumber
            }
            UserApi.updateUser(data).then(()=>{
                 toast.success("User updated!")
                 setSearch({pageType: ContainerPageType.Table})
                }).catch(()=>{
                    toast.error("Not Updated!")
                })
        }else{
            UserApi.createUser(value).then(()=>{
                toast.success("User Added!")
                setSearch({pageType: ContainerPageType.Table})
            }).catch(()=>{
                toast.error("Not Added!")
            })
        }
    },[UserApi, toast])

    return (
        <TabPage
            childrenClassName="p-3"
            headerComponent={
                <Button 
                    className="bg-warning px-3 py-1 text-light"
                    onClick={back}
                    >
                    Back
                </Button>
            }
            >
            <AdminUserForm
                initialValues={initialValues}
                setInitialValues={setInitialValues}
                submit={(value: any) =>submit(value)}
                />
        </TabPage>
    )
}