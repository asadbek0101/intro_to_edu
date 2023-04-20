import TableButton from "../../button/TableButton";
import DeleteIcon from "../../icons/DeleteIcon";
import EditIcon from "../../icons/EditIcon";
import Table, { HeaderProps } from "../../table/Table";

interface Props{
    readonly data: any;
    readonly editGlossaryDetials?: (value: any) => void;
    readonly deleteGlossaryDetials?: (value: any) => void;
}

export default function AdminGlassoryDetialsTable({
    data,
    editGlossaryDetials,
    deleteGlossaryDetials
}:Props){

    const headers: HeaderProps[] = [
        {
            access: "id",
            header: "ID",
            width: 60
        },
        {
            access: "title",
            header: "Title",
            width: 400
        },
        {
            access: "actions",
            header: "Actions",
            ceil: (row: any)=>{
                return (
                            <div className="d-flex">
                            <TableButton
                                className="bg-warning"
                                onClick={()=>editGlossaryDetials && editGlossaryDetials(row)}
                                >
                                <EditIcon color="white" size={14}/>
                            </TableButton>
                            <TableButton
                                className="bg-danger ms-2"
                                onClick={()=>deleteGlossaryDetials && deleteGlossaryDetials(row)}
                                >
                                <DeleteIcon color="white" size={14}/>
                            </TableButton>
                            </div>
                        )
            },
            width: 100
        }
    ]

    return (<Table headers={headers} data={data}/> )
}