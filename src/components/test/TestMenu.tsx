import Loading from "../loading/Loading";
import Card from "../ui/Card";

interface Props{
    readonly menu: any;
    readonly onChangeMenu: (value: any) => void;
}

export default function TestMenu({
    menu,
    onChangeMenu,
}:Props){
    return (
            <>
                {menu?(
                    <div className="row">
                    {menu.map((menuItem: any, index: number)=>{
                        const data = {
                            title: menuItem.name,
                            id: menuItem.id
                        }
                        return (
                           <div key={index} className="col-3 mt-4">
                             <Card 
                                entity={data}
                                setEntity={(value: any)=>onChangeMenu(value)}/>
                           </div>
                        )
                    })}
                    </div>
                ):(
                    <Loading/>
                )}
            </>
        )
}