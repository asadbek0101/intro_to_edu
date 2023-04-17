import  TypeWritter  from "typewriter-effect"
import "./assets/logo.scss";

export default function Logo(){
    return (
        <div className="logo-container">
           <span>
           <TypeWritter
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: ["Ta'limga Kirish"]
                }}
                />
           </span>
        </div>
    )
}