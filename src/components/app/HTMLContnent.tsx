import "./assets/html-content.scss";
interface Props{
    readonly htmlContent: any;
}

export default function HTMLContent({htmlContent}:Props){


    return (
        <div className="html-content-layout">
            <div className="html-content" dangerouslySetInnerHTML={{__html: htmlContent}}>   

            </div>
        </div>
    )
}