import Button from "../../button/Button";
import TabPage from "../../tabs/TabPage";

interface Props{
    readonly back: () => void;
}

export default function AdminTestFormWrapper({back}:Props){
    return (
        <TabPage
            childrenClassName="p-1"
            headerComponent={
                <Button
                    className="px-3 py-1 bg-warning text-light"
                    onClick={back}
                    >
                    Back
                </Button>
            }
            >
            
        </TabPage>
    )
}