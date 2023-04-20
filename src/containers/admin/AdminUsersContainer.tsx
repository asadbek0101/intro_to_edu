import { useSearchParams } from "react-router-dom";
import AdminContainerLayout from "../../components/admin/AdminContainerLayout";
import AdminUserFormWrapper from "../../components/admin/admin-user/AdminUserFormWrapper";
import AdminUserTableWrapper from "../../components/admin/admin-user/AdminUserTableWrapper";
import { useMemo } from "react";
import { ContainerPageType } from "../../api/AppDto";

export default function AdminUsersContainer(){

    const [ search , setSearch ] = useSearchParams();
    const pageType = useMemo(()=>search.get("pageType")? search.get("pageType") : ContainerPageType.Table,[search])

    return (
        <AdminContainerLayout>
            {pageType === ContainerPageType.Table && (
                <AdminUserTableWrapper 
                    create={()=>setSearch({pageType: ContainerPageType.Form})}
                    editUser={(value: any)=>{
                        const userId: any = Number(value.id)
                        setSearch({pageType: ContainerPageType.Form, userId: userId})
                    }}
                    />
            )}
            {pageType === ContainerPageType.Form && (
                <AdminUserFormWrapper 
                        back={()=>setSearch({pageType: ContainerPageType.Table})}/>
            )}
        </AdminContainerLayout>
    )
}