import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { AuthCredentials } from "../../interfaces";

export const authSlice = createApi({
    reducerPath: "auth",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_URL,
    }),
    endpoints: builder => ({
        login: builder.mutation({
            query: (Credentials: AuthCredentials) => ({
                url: "/auth/login",
                method: "POST",
                body: Credentials,
            }),
        }),
    }),
});

export const { useLoginMutation } = authSlice;