import TableButton from "../../button/TableButton";
import DeleteIcon from "../../icons/DeleteIcon";
import EditIcon from "../../icons/EditIcon";
import Table, { HeaderProps } from "../../table/Table";
import Link from "../../ui/Link";

interface Props{
    readonly onChangeTest: (value: any) => void;
    readonly editTest: (value: any) => void;
    readonly deleteTest: (value: any) => void;
    readonly data: any;
}

export default function AdminTestTable({
    onChangeTest, 
    data,
    editTest,
    deleteTest
}:Props){

    const headers: HeaderProps[] = [
       
        {   
            access: "id",
            header: "ID",
            ceil: (row: any)=>{
                return (
                           <Link onClick={()=>onChangeTest(row)}>
                            {row.id}
                           </Link>
                        )
            },
            width: 80,
        },
        {
            access: "name",
            header: "Test Name",
            width: 300,
        },
        {
            access: "description",
            header: "Description",
            width: 300,
        },
        {   
            access: "actions",
            header: "Actions",
            ceil: (row: any)=>{
                return (
                        <div className="d-flex">
                        <TableButton
                            className="bg-warning"
                            onClick={()=>editTest(row)}
                            >
                            <EditIcon color="white" size={14}/>
                        </TableButton>
                        <TableButton
                            className="bg-danger ms-2"
                            onClick={()=>deleteTest(row)}
                            >
                            <DeleteIcon color="white" size={14}/>
                        </TableButton>
                        </div>
                        )
            },
            width: 100,
        },

    ]


    return (<Table headers={headers} data={data}/>)
}