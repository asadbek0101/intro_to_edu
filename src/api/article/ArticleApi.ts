import { ApiContext } from "../ApiContext";

export class ArticleApi extends ApiContext{
    
    public getAllAricleTitles():Promise<any>{
        return this.get(`/article-type/getAll`)
    }

    public getArticleTitleById(id:number):Promise<any>{
        return this.get(`article-type/get/${id}`)
    }

    public deleteArticleTitle(id: number):Promise<any>{
        return this.delete(`/article-type/delete/${id}`)
    }

    public updateArticleTitle(body:any){
        return this.put("article-title/update", body)
    }

     public createArticleTitle(body: any){
        return this.post("/article-type/create", body)
    }

    public getArticlePartsById(id:number):Promise<any>{
        return this.get(`/article-titles/getAll/${id}`)
    }

    public getArticlePartById(id:number):Promise<any>{
        return this.get(`/article-title/get/${id}`)
    }

    public deleteArticlePart(id:number):Promise<any>{
        return this.delete(`/article-title/delete/${id}`)
    }

    public createArticlePart(body: any){
        return this.post("/article-title/create", body)
    }
}