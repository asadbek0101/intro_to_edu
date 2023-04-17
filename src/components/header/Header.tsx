import { NavLink } from "react-router-dom";
import "./assets/header.scss";
import Logo from "../ui/Logo";
import Marquee from "react-fast-marquee";

export default function Header(){
    return (
        <header id="user-header">
            <div className="container">
                <div className="logo-group">
                    {/* <span>Ta'limga Kirish</span> */}
                    <Logo/>
                </div>

                <div className="d-flex align-items-center">
                    <div className="after text-light me-4">
                        <Marquee speed={60} gradient={false} pauseOnHover>
                            <span className="mx-3">D.A. Zaripova</span>
                            <span>N.N. Zaxirova</span>
                        </Marquee>
                    </div>

                    <button className="login-button">
                        Kirish
                    </button>
                </div>
            </div>
        </header>
    )
}