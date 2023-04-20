import { ApiContext } from "../ApiContext";

export class LiteratureApi extends ApiContext{
    
    public getAllLiteratures():Promise<any>{
        return this.get(`/literature/getAll`)
    }

    public getLiteratureById(id:number):Promise<any>{
        return this.get(`/literature/get/${id}`)
    }

    public deleteLiterature(id: number):Promise<any>{
        return this.delete(`/literature/delete/${id}`)
    }

    public updateLiterature(body:any){
        return this.put("/literature/update", body)
    }

   public createLiterature(body: any){
        return this.post("/literature/create", body)
   }
}