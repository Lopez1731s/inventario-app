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
            query: (Product: any) => ({
                url: "/productos",
                method: "POST",
                body: Product,
            }),
            invalidatesTags: ["Products"],
        }),
        addProductImages: build.mutation({
            query: (data: any) => ({
                url: "/productos/images",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Products"],
        }),
    }),
    overrideExisting: false,
});

export const { useGetProductsQuery, useCreateProductMutation, useAddProductImagesMutation } = productSlice;
