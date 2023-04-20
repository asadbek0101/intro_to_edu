import { Route, Routes } from "react-router-dom"
import UserContainer from "./user/UserContainer"
import AdminContainer from "./admin/AdminContainer"
import AdminGlassoryesContainer from "./admin/AdminGlassoryesContainer"
import AdminTestsContainer from "./admin/AdminTestsContainer"
import UserHomeContainer from "./user/UserHomeContainer"
import UserGlassoryContainer from "./user/UserGlassoryContainer"
import UserTestContainer from "./user/UserTestContainer"
import AdminUsersContainer from "./admin/AdminUsersContainer"
import AdminArticlesContainer from "./admin/AdminArticlesContainer"
import UserArticleContainer from "./user/UserArticleContainer"
import PageNotFoundContainer from "./PageNotFoundContainer"
import AdminLiteratureContainer from "./admin/AdminLiteratureContainer"

export default function AppContainer(){
    return (
        <Routes>
            <Route path="/" element={<UserContainer/>}>
                <Route path="/" element={<UserHomeContainer/>}/>
                <Route path="/article/:tab?" element={<UserArticleContainer/>}/>
                <Route path="/glassory/:tab?" element={<UserGlassoryContainer/>}/>
                <Route path="/test/:tab?" element={<UserTestContainer/>}/>
            </Route>
            <Route path="/admin" element={<AdminContainer/>}>
                <Route path="/admin/users" element={<AdminUsersContainer/>}/>
                <Route path="/admin/articles" element={<AdminArticlesContainer/>}/>
                <Route path="/admin/glassoryes" element={<AdminGlassoryesContainer/>}/>
                <Route path="/admin/tests" element={<AdminTestsContainer/>}/>
                <Route path="/admin/literature" element={<AdminLiteratureContainer/>}/>
            </Route>
            <Route path="*" element={<PageNotFoundContainer/>} />
        </Routes>
    )
}