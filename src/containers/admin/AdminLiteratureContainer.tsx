import { useMemo } from "react"
import { useSearchParams } from "react-router-dom";
import AdminContainerLayout from "../../components/admin/AdminContainerLayout";
import { ContainerPageType } from "../../api/AppDto";
import AdminLiteratureTableWrapper from "../../components/admin/admin-literature/AdminLiteratureTableWrapper";
import AdminLiteratureFormWrapper from "../../components/admin/admin-literature/AdminLiteratureFormWrapper";

export default function AdminLiteratureContainer(){

    const [search, setSearch] = useSearchParams();

    const page = useMemo(()=>search.get("pageType")?search.get("pageType"):ContainerPageType.Table,[search])

    return (
        <AdminContainerLayout>
            {page === ContainerPageType.Table && (
                <AdminLiteratureTableWrapper
                    create={()=>{
                        setSearch({pageType: ContainerPageType.Form})
                    }}
                    editLiterature={(value: any)=>{
                        setSearch({pageType: ContainerPageType.Form, literatureId: value.id})
                    }}
                    />
            )}
            {page === ContainerPageType.Form && (
                <AdminLiteratureFormWrapper
                    back={()=>{
                        setSearch({pageType: ContainerPageType.Table})
                    }}
                    />
            )}
        </AdminContainerLayout>
    )
}