import { useCallback, useEffect, useState } from "react";
import Button from "../../button/Button";
import TabPage from "../../tabs/TabPage";
import AdminUserTable from "./AdminUserTable";
import { useUserApiContext } from "../../../api/user/UserApiContext";
import { useSearchParams } from "react-router-dom";
import Modal from "../../modal/Modal";
import YesOrNoModal from "../../app/YesOrNoModal";
import { toast } from "react-toastify";

interface Props{
    readonly create: () => void;
    readonly editUser: (value: any) => void;
}

export default function AdminUserTableWrapper({create, editUser}:Props){
    const [isModal, setIsModal] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const { UserApi } = useUserApiContext();
    const [users, setUsers] = useState();
 
    useEffect(()=>{
        UserApi.getAllUsers().then((response: any)=>setUsers(response.data.data)).catch((error: any)=>toast.error(error.message))
    },[UserApi])

    const deleteUser = useCallback((value: any)=>{
            const userId = Number(value.id)
            UserApi.deleteUser(userId).then(()=>{
                toast.success("Deleted!")
                window.location.reload();
            }).catch(()=>{
                toast.error("Not Deleted!")
            })
    },[UserApi,toast])

    return (
        <TabPage
            childrenClassName="p-3"
            headerComponent={
                <Button 
                    className="bg-warning text-light px-2 py-1"
                    onClick={create}
                    >
                    Create User
                </Button>
            }
            >
            <AdminUserTable 
                data={users}
                deleteUser={(value: any)=>deleteUser(value)}
                editUser={(value: any)=>editUser(value)}
                />
            <Modal
                show={isModal}
                closeHandler={()=>setIsModal(false)}
                className="d-flex justify-content-center align-items-center rounded-1"
                width="400px"
                >
                <YesOrNoModal
                    titleText="Are you sure deleted?"
                    onClick={(value:any)=>setIsDelete(value)}
                    />
            </Modal>
        </TabPage>
    )
}