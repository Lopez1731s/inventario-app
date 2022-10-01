import { apiSlice } from "../api/apiSlice";

export const rolesSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getRoles: build.query({
            query: () => "/roles",
            providesTags: ["Roles"],
        }),
        getRole: build.query({
            query: (id: number) => `/roles/${id}`,
            providesTags: ["Roles"],
        }),
    }),
});

export const { useGetRolesQuery, useGetRoleQuery } = rolesSlice;