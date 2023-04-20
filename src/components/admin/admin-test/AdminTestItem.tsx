import DropDown from "../../ui/DropDown";
import "./assets/admin-test-item.scss";

interface Props{
    readonly question: any;
    readonly testNumber?: any; 
    readonly editQuestion: (value: any) => void;
    readonly deleteQuestion: (value: any) => void;
}

export default function AdminTestItem({question, ...props}:Props){
    return (
        <div className="admin-test-item-container">
                <div className="question d-flex justify-content-between align-items-center">
                    <h5>{question.title}</h5>
                    <DropDown delet={()=>props.deleteQuestion(question)} edit={()=>props.editQuestion(question)}/>
                </div>
                <div className="answers">
                    {question.answers && question.answers.map((answer: any, ind: any)=>{
                        return (
                            <div key={ind} className={`answer ${answer.isRight? "custom-active-answer" : ""}`}>
                                <span>{answer.answer}</span>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}