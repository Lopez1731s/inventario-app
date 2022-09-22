import { IMarca } from "../../interfaces";
import { apiSlice } from "../api/apiSlice";

export const marcasSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getMarcas: build.query({
            query: () => "/marcas",
            providesTags: ["Marcas"],
        }),
        getMarca: build.query({
            query: (id: number) => `/marcas/${id}`,
        }),
        createMarca: build.mutation({
            query: (marca: IMarca) => ({
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

export const { useGetMarcasQuery } = marcasSlice;