import { apiSlice } from "../api/apiSlice";
import { IProductoCreate } from '../../interfaces/Products';
import { Pagination } from "../../interfaces";

export const productSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query({
            query: (args: Pagination) => `/productos?page=${args.page}&limit=${args.limit}`,
            providesTags: ["Products"],
        }),
        createProduct: build.mutation({
            query: (Product: IProductoCreate) => ({
                url: "/productos?page=1&limit=1",
                method: "POST",
                body: Product,
            }),
            invalidatesTags: ["Products"],
        }),
    }),
    overrideExisting: false,
});

export const { useGetProductsQuery, useCreateProductMutation } = productSlice;
