import { useMemo } from "react";
import { GlossaryApi } from "./GlossaryApi";

interface Props{
    readonly GlossaryApi: GlossaryApi;
}

export function useGlossaryApiContext():Props{
    const api = useMemo(() => new GlossaryApi(), []);

    return {
        GlossaryApi: api
    }
}