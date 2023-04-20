import TableButton from "../../button/TableButton"
import DeleteIcon from "../../icons/DeleteIcon"
import EditIcon from "../../icons/EditIcon"
import Table, { HeaderProps } from "../../table/Table"

interface TableProps{
    readonly data: any;
    readonly deleteUser: (value: any) => void;
    readonly editUser: (value: any) => void;
}

export default function AdminUserTable({data, deleteUser, editUser}:TableProps){
    const header: HeaderProps[] = [
        {
            header: "ID",
            access: "id",
            width: 60 
        },
        // {
        //     header: "Created Date",
        //     access: "createdDate",
        //     width: 160,  
        // },
        // {
        //     header: "Updated Date",
        //     access: "updatedDate",
        //     width: 160  
        // },
        {
            header: "Email",
            access: "email",
            width: 280
        },
        {
            header: "Phone Number",
            access: "phoneNumber",
            width: 220  
        },
        {
            header: "Role",
            access: "role",
            width: 100
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
                                onClick={()=>editUser(row)}
                                >
                                <EditIcon color="white" size={14}/>
                            </TableButton>
                            <TableButton
                                className="bg-danger ms-2"
                                onClick={()=>deleteUser(row)}
                                >
                                <DeleteIcon color="white" size={14}/>
                            </TableButton>
                            </div>
                        )
            },
        },
    ]

    // const data = [
    //     {
    //         id: 1,
    //         name: "Asadbek",
    //         email: "a@gmail.com",
    //         phoneNumber: "998 99 690 69 01",
    //         country: "Namangan",
    //         role: "Teacher",
    //         createdDate: "20.02.2023",
    //         updatedDate: "16.04.2023"
    //     },
    //     {
    //         id: 2,
    //         name: "Ilhomjon",
    //         email: "i@gmail.com",
    //         phoneNumber: "998 99 998 99 88",
    //         country: "Samarqand",
    //         role: "Student",
    //         createdDate: "20.02.2023",
    //         updatedDate: "16.04.2023"
    //     },
    //     {
    //         id: 3,
    //         name: "Mirkomil",
    //         email: "m@gmail.com",
    //         phoneNumber: "998 91 009 00 99",
    //         country: "Andijon",
    //         role: "Student",
    //         createdDate: "20.02.2023",
    //         updatedDate: "16.04.2023"
    //     },
    // ]

    return (<Table headers={header} data={data}/>)
}