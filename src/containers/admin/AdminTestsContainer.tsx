import { useSearchParams } from "react-router-dom";
import AdminContainerLayout from "../../components/admin/AdminContainerLayout";
import AdminTestDetailsFormWrapper from "../../components/admin/admin-test/AdminTestDetailsFormWrapper";
import AdminTestTableWrapper from "../../components/admin/admin-test/AdminTestTableWrapper";
import { useCallback, useMemo, useState } from "react";
import { ContainerPageType } from "../../api/AppDto";
import AdminTestFormWrapper from "../../components/admin/admin-test/AdminTestFormWrapper";
import { TESTS } from "../../components/admin/data/tests";

export default function AdminTestsContainer(){
    const [search, setSearch] = useSearchParams();
    const pageType = useMemo(()=>search.get("pageType")? search.get("pageType") : ContainerPageType.Table,[search])

    const onChangeTest = useCallback((value: any)=>{
        setSearch({pageType: ContainerPageType.Details, testId: value.id})
    },[setSearch, ContainerPageType])


    return (
        <AdminContainerLayout>
            {pageType === ContainerPageType.Table && (
                <AdminTestTableWrapper 
                    onChangeTest={(value)=>onChangeTest(value)}
                    create={()=>{
                        setSearch({pageType: ContainerPageType.Form})
                    }}
                    editTest={(value: any)=>{
                        setSearch({pageType: ContainerPageType.Form, testId: value.id})
                    }}
                    />
            )}
            {pageType === ContainerPageType.Details && (
                <AdminTestDetailsFormWrapper
                    back={()=>{
                        setSearch({pageType: ContainerPageType.Table})
                    }}
                    />
            )}
            {pageType === ContainerPageType.Form && (
                <AdminTestFormWrapper
                    back={()=>{
                        setSearch({pageType: ContainerPageType.Table})
                    }}
                    />
            )}
        </AdminContainerLayout>
    )
}