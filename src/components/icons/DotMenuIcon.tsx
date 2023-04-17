import "./assets/icon.scss";

interface Props{
    readonly size?: number;
    readonly color?: string; 
    readonly className?: string;
}

export default function DotMenuIcon({size = 15, color = "white", className}:Props){
    return (
        <svg className={`dot-menu-icon ${className} custom-dot-menu-icon`} xmlns="http://www.w3.org/2000/svg" fill={color} width={size} viewBox="0 0 448 512">
            <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
        </svg>
    )
}