import { IMarcaCreate, Pagination } from "../../interfaces";
import { apiSlice } from "../api/apiSlice";

export const marcasSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getMarcas: build.query({
            query: (args: Pagination) => `/marcas?page=${args.page}&limit=${args.limit}`,
            providesTags: ["Marcas"],
        }),
        getMarca: build.query({
            query: (id: number) => `/marcas/${id}`,
        }),
        createMarca: build.mutation({
            query: (marca: IMarcaCreate) => ({
                url: "/marcas",
                method: "POST",
                body: marca,
            }),
            invalidatesTags: ["Marcas"],
            extraOptions: { maxRetries: 1 },
        }),
    }),
    overrideExisting: false,
});

export const { useGetMarcasQuery, useGetMarcaQuery, useCreateMarcaMutation } = marcasSlice;