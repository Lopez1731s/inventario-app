import { IProveedorCreate, Pagination } from "../../interfaces";
import { apiSlice } from "../api/apiSlice";
import { IProveedorUpdate } from '../../interfaces/Proveedor';

export const proveedoresSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getProveedores: build.query({
            query: (args: Pagination) => `/proveedores?page=${args.page}&limit=${args.limit}`,
            providesTags: ["Proveedores"],
        }),
        getProveedor: build.query({
            query: (id: string) => `/proveedores/${id}`,
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
        updateProveedor: build.mutation({
            query(data : IProveedorUpdate) {
                const { id, ...body } = data;
                return {
                    url: `/proveedores/${data.id}`,
                    method: "PATCH",
                    body
                };
            },
            invalidatesTags: ["Proveedores"],
            extraOptions: { maxRetries: 1 },
        }),
        deleteProveedor: build.mutation({
            query: (id: number) => ({
                url: `/proveedores/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Proveedores"],
            extraOptions: { maxRetries: 1 },
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetProveedoresQuery,
    useGetProveedorQuery,
    useCreateProveedorMutation,
    useUpdateProveedorMutation,
    useDeleteProveedorMutation,
} = proveedoresSlice;