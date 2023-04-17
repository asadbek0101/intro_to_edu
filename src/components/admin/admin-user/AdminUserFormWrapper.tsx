import Button from "../../button/Button";
import TabPage from "../../tabs/TabPage";

interface Props{
    readonly back: () => void
}

export default function AdminUserFormWrapper({back}:Props){
    return (
        <TabPage
            childrenClassName="p-2"
            headerComponent={
                <Button 
                    className="bg-warning px-3 py-1 text-light"
                    onClick={back}
                    >
                    Back
                </Button>
            }
            >
            Admin User Form Wrapper
        </TabPage>
    )
}