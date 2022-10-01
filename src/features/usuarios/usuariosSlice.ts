import { apiSlice } from "../api/apiSlice";

export const usuariosSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getUsuarios: build.query({
            query: () => "/usuarios",
            providesTags: ["Usuarios"],
        }),
    }),
});

export const { useGetUsuariosQuery } = usuariosSlice;