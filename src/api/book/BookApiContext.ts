import { useMemo } from "react";
import { BookApi } from "./BookApi";

interface Props{
    readonly BookApi: BookApi;
}

export function useBookApiContext():Props{
    const api = useMemo(() => new BookApi(), []);

    return {
        BookApi: api
    }
}