import { useMemo } from "react";
import { ArticleApi } from "./ArticleApi";

interface Props{
    readonly ArticleApi: ArticleApi;
}

export function useArticleApiContext():Props{
    const api = useMemo(() => new ArticleApi(), []);

    return {
        ArticleApi: api
    }
}