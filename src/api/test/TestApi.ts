import { ApiContext } from "../ApiContext";

export class TestApi extends ApiContext{
    
    public getAllTests():Promise<any>{
        return this.get(`quiz-type/getAll`)
    }
  
    public getTestById(id: number):Promise<any>{
        return this.get(`quiz-type/get/${id}`)
    }

    public getQuestions(body:any):Promise<any>{
        return this.post(`/quiz`, body)
    }

    public deleteTest(id: number):Promise<any>{
        return this.delete(`/quiz-type/delete/${id}`)
    }

    public updateTest(body:any){
        return this.put("/quiz-type/update", body)
    }

    public createTest(body: any){
        return this.post("/quiz-type/create", body)
    }

    public getQuizQuestions(id: number):Promise<any>{
        return this.get(`question/getAll/${id}`)
    }

    public createQuizQuestion(body: any){
        return this.post("/question/create", body)
    }

    public checkAnswer(body: any){
        return this.post("/check-answer", body)
    }

    public deleteQuizQuestion(id: number):Promise<any>{
        return this.delete(`/question/delete/${id}`)
    }

    public getQuizQuestionById(id: number):Promise<any>{
        return this.get(`/question/get/${id}`)
    }

    public updateTestQuiz(body:any){
        return this.put("/question/update", body)
    }
}