import { useMemo, useState } from "react";
import AdminContainerLayout from "../../components/admin/AdminContainerLayout";
import AdminGlassoryTableWrapper from "../../components/admin/admin-glassory/AdminGlassoryTableWrapper";
import { ContainerPageType } from "../../api/AppDto";
import { useSearchParams } from "react-router-dom";
import AdminGlassoryFormWrapper from "../../components/admin/admin-glassory/AdminGlassoryFormWrapper";
import AdminGlassoryDetilsFormWrapper from "../../components/admin/admin-glassory/AdminGlassoryDetailsFormWrapper";
import AdminGlassoryDetailsTableWrapper from "../../components/admin/admin-glassory/AdminGlassoryDetailsTableWrapper";

export default function AdminGlassoryesContainer(){
    
    const [ search, setSearch ] = useSearchParams();

    const page = useMemo(()=>search.get("pageType")?search.get("pageType"):ContainerPageType.Table,[search])

    return (
        <AdminContainerLayout>
            {page === ContainerPageType.Table && (
                <AdminGlassoryTableWrapper
                    create={()=>setSearch({pageType: ContainerPageType.Form})}
                    editGlassory={(value: any)=>{
                        setSearch({pageType: ContainerPageType.Form, glossaryId: value.id})
                    }}
                    onChangeGlossary={(value: any)=>{
                        setSearch({pageType: ContainerPageType.Details, glossaryId: value.id})
                    }}
                    />
            )}
            {page === ContainerPageType.Form && (
                <AdminGlassoryFormWrapper
                    back={()=>setSearch({pageType: ContainerPageType.Table})}
                    />
            )}
            {page === ContainerPageType.Details && (
                <AdminGlassoryDetailsTableWrapper
                    createDetails={()=>{
                        search.set("pageType", ContainerPageType.DetailsForm)
                        setSearch(search)
                    }}
                    backToGlossares={()=>{
                        setSearch({pageType: ContainerPageType.Table})
                    }}
                    editGlossaryDetials={(value: any)=>{
                        search.set("pageType", ContainerPageType.DetailsForm)
                        search.set("glossaryDetailsId", value.id)
                        setSearch(search)
                    }}
                    />
            )}
            {page === ContainerPageType.DetailsForm && (
                <AdminGlassoryDetilsFormWrapper
                    back={()=>{
                        search.set("pageType", ContainerPageType.Details)
                        search.delete("glossaryDetailsId")
                        setSearch(search)
                    }}
                    />
            )}
        </AdminContainerLayout>
    )
}