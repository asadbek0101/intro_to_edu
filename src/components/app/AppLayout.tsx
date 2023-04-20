import { ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

interface Props{
    readonly children: ReactNode;
}

export default function AppLayout({children}:Props){
    return (
        <div>
            <div className="app-header">
                <Header/>
            </div>
            {children}

            <div className="app-footer">
                <Footer/>
            </div>
        </div>
    )
}