import TableButton from "../../button/TableButton";
import DeleteIcon from "../../icons/DeleteIcon";
import EditIcon from "../../icons/EditIcon";
import Table, { HeaderProps } from "../../table/Table"
import Link from "../../ui/Link";

interface Props{
    readonly data: any;
    readonly editArticle?: (value: any) => void;
    readonly deleteArticle?: (value: any) => void;
    readonly onChangeArticle?: (value: any) => void;
}

export default function AdminArticleTable({
    data,
    deleteArticle,
    editArticle,
    onChangeArticle,
}:Props){

    const header: HeaderProps[] = [
        {
            access: "id",
            header: "ID",
            ceil: (row: any)=>{
                return (
                           <Link onClick={()=> onChangeArticle && onChangeArticle(row)}>
                            {row.id}
                           </Link>
                        )
            },
            width: 80,
        },
        {
            access: "name",
            header: "Article Title",
            width: 500,
        },
        {
            header: "Edit",
            access: 'edit',
            width: 100,
            ceil: (row: any)=>{
                return (
                            <div className="d-flex">
                            <TableButton
                                className="bg-warning"
                                onClick={()=>editArticle && editArticle(row)}
                                >
                                <EditIcon color="white" size={14}/>
                            </TableButton>
                            <TableButton
                                className="bg-danger ms-2"
                                onClick={()=>deleteArticle && deleteArticle(row)}
                                >
                                <DeleteIcon color="white" size={14}/>
                            </TableButton>
                            </div>
                        )
            },
        },
    ]

    return (<Table headers={header} data={data}/>)
}