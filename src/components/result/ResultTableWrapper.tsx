import TabPage from "../tabs/TabPage";
import ResultTable from "./ResultTable";

export default function ResultTableWrapper(){
    return (
        <TabPage
            childrenClassName="p-3"
            >
            <ResultTable/>
        </TabPage>
    )
}