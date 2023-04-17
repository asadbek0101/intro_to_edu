import ArticleMenuWrapper from "../../components/article/ArticleMenuWrapper";
import GlassoryMenuWrapper from "../../components/glassory/GlassoryMenuWrapper";
import BooksList from "../../components/home/BooksList";
import DecisionText from "../../components/home/DecisionText";
import HomeText from "../../components/home/HomeText";
import TestMenuWrapper from "../../components/test/TestMenuWrapper";

export default function UserHomeContainer(){
    return (
        <div className="">
            <HomeText/>
            <DecisionText/>
            <ArticleMenuWrapper/>
            <GlassoryMenuWrapper/>
            <TestMenuWrapper/>
            <BooksList/>
        </div>
    )
}