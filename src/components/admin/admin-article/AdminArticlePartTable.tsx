import TableButton from "../../button/TableButton";
import DeleteIcon from "../../icons/DeleteIcon";
import EditIcon from "../../icons/EditIcon";
import Table, { HeaderProps } from "../../table/Table";

interface Props{
    readonly data: any;
    readonly editArticlePart?: (value: any) => void;
    readonly deleteArticlePart?: (value: any) => void;
}

export default function AdminArticlePartTable({
    data,
    editArticlePart,
    deleteArticlePart
}:Props){

    const headers: HeaderProps[] = [
        {
            access: "id",
            header: "ID",
            width: 60
        },
        {
            access: "name",
            header: "Name",
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
                                onClick={()=>editArticlePart && editArticlePart(row)}
                                >
                                <EditIcon color="white" size={14}/>
                            </TableButton>
                            <TableButton
                                className="bg-danger ms-2"
                                onClick={()=>deleteArticlePart && deleteArticlePart(row)}
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