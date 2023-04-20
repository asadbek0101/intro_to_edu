import AppDashboard from "../app/AppDashboard";
import HTMLContent from "../app/HTMLContnent";
import Loading from "../loading/Loading";

interface ArticleViewProps{
    readonly glassoryMenus: any;
    readonly glassoryDetails: any;
    readonly setMenu: (value: any) => void;
    readonly activeTab: string;
}

export default function GlassoryView({
        glassoryDetails, 
        activeTab,
        glassoryMenus, 
        setMenu,
    }:ArticleViewProps){
    return (
    <AppDashboard
        menu={glassoryMenus}
        activeTab={activeTab}
        onChangeTab={setMenu}
        >
        <HTMLContent
                htmlContent={glassoryDetails.definition}
                />
    </AppDashboard> )
}