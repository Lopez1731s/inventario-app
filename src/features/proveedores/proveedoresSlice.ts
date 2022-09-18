import { IProveedorCreate } from "../../interfaces";
import { apiSlice } from "../api/apiSlice";

export const proveedoresSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getProveedores: build.query({
            query: () => "/proveedores",
            providesTags: ["Proveedores"],
        }),
        createProveedor: build.mutation({
            query: (proveedor: IProveedorCreate) => ({
                url: "/proveedores",
                method: "POST",
                body: proveedor,
            }),
            invalidatesTags: ["Proveedores"],
            extraOptions: { maxRetries: 1 },
        }),
    }),
    overrideExisting: false,
});

export const { useGetProveedoresQuery, useCreateProveedorMutation } = proveedoresSlice;