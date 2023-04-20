import Table, { HeaderProps } from "../table/Table";

export default function ResultTable(){

    const headers: HeaderProps[] = [
        {
            access: "name",
            header: "Test Name",
            width: 500
        },
        {
            access: "result",
            header: "Test Result",
            width: 200
        }
    ]

    const data = [
        {
            name: "Matematika asoslari",
            result: "30"
        },
        {
            name: "Arifmetika asoslari",
            result: "20"
        },
    ]

    return (<Table 
                headers={headers}
                data={data}
                />)
}