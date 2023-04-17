import { useState } from "react";
import TestView from "./TestView";
import TestViewLayout from "./TestViewLayout";
import { TEST_DATA } from "./test";

export default function TestViewWrapper(){

    const [testArray, setTestArray] = useState(TEST_DATA)

    return (
        <TestViewLayout data={testArray}>
            <TestView data={testArray} setData={setTestArray}/>
        </TestViewLayout>
    )
}