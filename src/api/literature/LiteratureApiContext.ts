import { useMemo } from "react";
import { LiteratureApi } from "./LiteratureApi";

interface Props{
    readonly LiteratureApi: LiteratureApi;
}

export function useLiteratureApiContext():Props{
    const api = useMemo(() => new LiteratureApi(), []);

    return {
        LiteratureApi: api
    }
}