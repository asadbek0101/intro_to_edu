import { ApiContext } from "../ApiContext";

export class UserApi extends ApiContext{
    
    public getAllUsers():Promise<any>{
        return this.get(`/auth/users`)
    }

    public getUserById(id:number):Promise<any>{
        return this.get(`/auth/get/${id}`)
    }

    public deleteUser(id: number):Promise<any>{
        return this.delete(`/auth/${id}`)
    }

    public updateUser(body:any){
        return this.put("/auth/update", body)
    }

   public createUser(body: any){
        return this.post("/auth/create", body)
   }
}