import AppDashboard from "../app/AppDashboard";
import HTMLContent from "../app/HTMLContnent";
import Loading from "../loading/Loading";

interface ArticleViewProps{
    readonly articleMenus?: any;
    readonly articleDetails?: any;
    readonly setMenu: (value: any) => void;
    readonly activeTab?: string;
}

export default function ArticleView({
        articleDetails, 
        activeTab = "1",
        articleMenus, 
        setMenu,
    }:ArticleViewProps){
    return (
    <AppDashboard
        menu={articleMenus}
        activeTab={activeTab}
        onChangeTab={setMenu}
        >
        <HTMLContent
                htmlContent={articleDetails.articleContent}
                />
    </AppDashboard> )
}