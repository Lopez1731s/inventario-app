import { apiSlice } from "../api/apiSlice";

export const categoriasSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getCategorias: build.query({
            query: () => "/categorias",
        }),
    }),
    overrideExisting: false,
});