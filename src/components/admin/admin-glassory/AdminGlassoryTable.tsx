import TableButton from "../../button/TableButton";
import DeleteIcon from "../../icons/DeleteIcon";
import EditIcon from "../../icons/EditIcon";
import Table, { HeaderProps } from "../../table/Table"
import Link from "../../ui/Link";

interface Props{
    readonly data: any;
    readonly deleteGlassory: (value: any) => void;
    readonly editGlassory: (value: any) => void;
    readonly onChangeGlossary: (value: any) => void;
}

export default function AdminGlassoryTable({
    data,
    deleteGlassory,
    editGlassory,
    onChangeGlossary
}:Props){

    const headers: HeaderProps[] = [
        {
            access: "id",
            header: "ID",
            ceil: (row: any)=>{
                return (
                           <Link onClick={()=> onChangeGlossary && onChangeGlossary(row)}>
                            {row.id}
                           </Link>
                        )
            },
            width: 100,
        },
        {
            access: "name",
            header: "Glassory Title",
            width: 400
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
                                onClick={()=>editGlassory(row)}
                                >
                                <EditIcon color="white" size={14}/>
                            </TableButton>
                            <TableButton
                                className="bg-danger ms-2"
                                onClick={()=>deleteGlassory(row)}
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