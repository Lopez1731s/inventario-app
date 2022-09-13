import { ICargosCreate } from "../../interfaces";
import { apiSlice } from "../api/apiSlice";

export const cargosSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getCargos: build.query({
            query: () => "/cargos",
            providesTags: ["Cargos"],
        }),
        getCargo: build.query({
            query: (id: number) => `/cargos/${id}`,
        }),
        createCargo: build.mutation({
            query: (cargo: ICargosCreate) => ({
                url: "/cargos",
                method: "POST",
                body: cargo,
            }),
            invalidatesTags: ["Cargos"],
            extraOptions: { maxRetries: 1 },
        }),
    }),
    overrideExisting: false,
});

export const { useGetCargosQuery, useGetCargoQuery, useCreateCargoMutation } = cargosSlice;