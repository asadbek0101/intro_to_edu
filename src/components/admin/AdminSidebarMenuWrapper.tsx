import MenuItem from "../app/MenuItem";
import ArticleIcon from "../icons/ArticleIcon";
import BookIcon from "../icons/BookIcon";
import GlassoryIcon from "../icons/GlassoryIcon";
import TestIcon from "../icons/TestIcon";
import UserIcon from "../icons/UserIcon";
import AdminSidebarLayout from "./AdminSidebarLayout";

export default function AdminSidebarMenuWrapper(){
    return (
        <AdminSidebarLayout>
            <MenuItem 
                to="/admin/users" 
                icon={<UserIcon/>}>
                    Users
            </MenuItem>
            <MenuItem 
                to="/admin/articles"
                icon={<ArticleIcon/>}>
                Articles
            </MenuItem>
            <MenuItem 
                to="/admin/glassoryes"
                icon={<GlassoryIcon/>}>
                Glossares
            </MenuItem>
            <MenuItem 
                to="/admin/tests"
                icon={<TestIcon/>}>
                Tests
            </MenuItem>
            <MenuItem 
                to="/admin/literature"
                icon={<BookIcon/>}>
                Literatures
            </MenuItem>
        </AdminSidebarLayout>
    )
}