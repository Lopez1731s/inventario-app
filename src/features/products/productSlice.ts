import { apiSlice } from "../api/apiSlice";

export const productSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => "/productos",
            providesTags: ["Products"],
        }),
    }),
    overrideExisting: false,
});

export const { useGetProductsQuery } = productSlice;
