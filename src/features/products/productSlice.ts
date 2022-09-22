import { apiSlice } from "../api/apiSlice";
import { IProductoCreate } from '../../interfaces/Products';

export const productSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => "/productos",
            providesTags: ["Products"],
        }),
        createProduct: build.mutation({
            query: (Product: IProductoCreate) => ({
                url: "/productos",
                method: "POST",
                body: Product,
            }),
            invalidatesTags: ["Products"],
        }),
    }),
    overrideExisting: false,
});

export const { useGetProductsQuery, useCreateProductMutation } = productSlice;
