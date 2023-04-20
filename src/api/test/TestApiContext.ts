import { useMemo } from "react";
import { TestApi } from "./TestApi";

interface Props{
    readonly TestApi: TestApi;
}

export function useTestApiContext():Props{
    const api = useMemo(() => new TestApi(), []);

    return {
        TestApi: api
    }
}