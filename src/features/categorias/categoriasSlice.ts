import { ICategoriasCreate, Pagination } from "../../interfaces";
import { apiSlice } from "../api/apiSlice";

export const categoriasSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getCategorias: build.query({
            query: (args: Pagination) => `/categorias?page=${args.page}&limit=${args.limit}`,
            providesTags: ["Categorias"],
        }),
        getCategoria: build.query({
            query: (id: number) => `/categorias/${id}`,
        }),
        createCategoria: build.mutation({
            query: (categoria: ICategoriasCreate) => ({
                url: "/categorias",
                method: "POST",
                body: categoria,
            }),
            invalidatesTags: ["Categorias"],
            extraOptions: { maxRetries: 1 },
        }),
    }),
    overrideExisting: false,
});

export const { useGetCategoriasQuery, useGetCategoriaQuery, useCreateCategoriaMutation } = categoriasSlice;