import { Pagination } from "../../interfaces";
import { apiSlice } from "../api/apiSlice";

export const empleadosSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getEmpleados: build.query({
            query: (args: Pagination) => `/empleados?page=${args.page}&limit=${args.limit}`,
            providesTags: ["Empleados"],
        }),
        getEmpleado: build.query({
            query: (id: number) => `/empleados/${id}`,
        }),
    }),
});

export const { useGetEmpleadosQuery, useGetEmpleadoQuery } = empleadosSlice;