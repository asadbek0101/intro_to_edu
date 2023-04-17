import { useSearchParams } from "react-router-dom";
import Button from "../../button/Button";
import TabPage from "../../tabs/TabPage";
import AdminTestDetailsForm from "./AdminTestDetailsForm";
import { useEffect, useMemo, useState } from "react";
import { TESTS } from "../data/tests";
interface Props{
    readonly back: () => void;
}

export default function AdminTestDetailsFormWrapper({back}:Props){
    
    const [search, setSearch] = useSearchParams();
    const [checkTest, setCheckTest] = useState<any>({})
    const [data, setData] = useState(TESTS)

    const testId = useMemo(()=>search.get("testId")?search.get("testId"):"",[search])

    useEffect(()=>{
        let CHEK_TEST = data.filter((item: any)=>item.testTitleId === Number(testId))[0];
        setCheckTest(CHEK_TEST)
    },[setCheckTest, data, testId])

    return (
        <TabPage
            childrenClassName="p-4"
            headerComponent={
                <Button
                    className="px-3 py-1 bg-warning text-light"
                    onClick={back}
                    >
                    Back
                </Button>
            }
            >
            <AdminTestDetailsForm test={checkTest}/>
        </TabPage>
    )
}