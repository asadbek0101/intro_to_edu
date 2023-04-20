import TableButton from "../../button/TableButton";
import DeleteIcon from "../../icons/DeleteIcon";
import EditIcon from "../../icons/EditIcon";
import Table, { HeaderProps } from "../../table/Table"

interface Props{
    readonly data: any;
    readonly deleteLiterature?: (value: any) => void
    readonly editLiterature?: (value: any) => void
}

export default function AdminLiteratureTable({
    data,
    deleteLiterature,
    editLiterature
}:Props){

    const headers: HeaderProps[] = [
        {
            access: "id",
            header: "ID",
            width: 80
        },
        {
            access: "title",
            header: "Literature Name",
            width: 400
        },
        {
            access: "literatureType",
            header: "Type",
            width: 200
        },
        {
            header: "Edit",
            access: 'edit',
            width: 140,
            ceil: (row: any)=>{
                return (
                            <div className="d-flex">
                            <TableButton
                                className="bg-warning"
                                onClick={()=>editLiterature && editLiterature(row)}
                                >
                                <EditIcon color="white" size={14}/>
                            </TableButton>
                            <TableButton
                                className="bg-danger ms-2"
                                onClick={()=>deleteLiterature && deleteLiterature(row)}
                                >
                                <DeleteIcon color="white" size={14}/>
                            </TableButton>
                            </div>
                        )
            },
        },
    ]

    return (<Table headers={headers} data={data}/>)
}