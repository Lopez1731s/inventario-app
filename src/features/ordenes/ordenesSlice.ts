import { Pagination } from "../../interfaces";
import { IOrdenCreate } from "../../interfaces/Ordenes";
import { apiSlice } from "../api/apiSlice";

export const ordenesSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getOrdenes: build.query({
            query: (args: Pagination) => `/ordenes?page=${args.page}&limit=${args.limit}`,
            providesTags: ["Ordenes"],
        }),
        createOrden: build.mutation({
            query: (orden: IOrdenCreate) => ({
                url: "/ordenes",
                method: "POST",
                body: orden,
            }),
        }),
    }),
});

export const {
    useGetOrdenesQuery,
    useCreateOrdenMutation,
} = ordenesSlice;