import { useState } from "react";
import Button from "../../button/Button";
import TabPage from "../../tabs/TabPage";
import AdminTestTable from "./AdminTestTable";
import { TEST_TITLES } from "../data/tests";

interface Props{
    readonly create: () => void;
    readonly onChangeTest: (value: any) => void;
}

export default function AdminTestTableWrapper({create, onChangeTest}:Props){

    const [data, setData] = useState(TEST_TITLES);

    return (
        <TabPage
            headerComponent={
                <Button 
                    className="px-3 py-1 bg-warning text-light"
                    onClick={create}
                    >
                    Create Test
                </Button>
            }
            childrenClassName="p-2"
            >
            <AdminTestTable data={data} onChangeTest={onChangeTest}/>
        </TabPage>
    )
}