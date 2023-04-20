import { ApiContext } from "../ApiContext";

export class GlossaryApi extends ApiContext{
    
    public getAllGlossares():Promise<any>{
        return this.get(`/glossary-type/getAll`)
    }

    public getGlossaryById(id:number):Promise<any>{
        return this.get(`/glossary-type/get/${id}`)
    }

    public deleteGlossary(id: number):Promise<any>{
        return this.delete(`/glossary-type/delete/${id}`)
    }

    public updateGlassory(body:any){
        return this.put("/glossary-type/update", body)
    }

    public createGlassory(body: any){
        return this.post("/glossary-type/create", body)
    }

    public getAllGlossaryDetails(id: number):Promise<any>{
        return this.get(`/glossary/getAll/${id}`)
    }

    public getGlossaryDetailsById(id: number):Promise<any>{
        return this.get(`/glossary/get/${id}`)
    }

    public createGlassoryDetails(body: any){
        return this.post("/glossary/create", body)
    }

    public updateGlassoryDetails(body:any){
        return this.put("/glossary/update", body)
    }

    public deleteGlossaryDetails(id: number):Promise<any>{
        return this.delete(`/glossary/delete/${id}`)
    }
}