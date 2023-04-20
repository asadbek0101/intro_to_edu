import "./assets/test-view-item.scss";

interface Props{
    readonly question: any;
    readonly onChangeAnswer: (question: any,value: any) => void;
    readonly testNumber: number;
}

export default function TestViewItem({question, onChangeAnswer, ...props}:Props){
    return (
            <div className="test-view-item">
                <div className="question">
                    <h5>{props.testNumber}.{question.title}</h5>
                </div>
                <div className="answers">
                    {question.answers && question.answers.map((answer: any, ind: any)=>{
                        return (
                            <div key={ind} className={`answer ${answer.isRight? "custom-active-answer" : ""}`} onClick={()=>onChangeAnswer(question, answer)}>
                                <span>{answer.answer}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
    )
}