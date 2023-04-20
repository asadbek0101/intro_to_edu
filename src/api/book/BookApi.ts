import { ApiContext } from "../ApiContext";

export class BookApi extends ApiContext{
    
    public getAllUsers():Promise<any>{
        return this.get(``)
    }

    public getUserById(id:number):Promise<any>{
        return this.get(`/${id}`)
    }

    public deleteUser(id: number):Promise<any>{
        return this.delete(`/${id}`)
    }

    public updateUser(body:any){
        return this.put("/User", body)
    }

   public createUser(body: any){
        return this.post("/User", body)
   }
}