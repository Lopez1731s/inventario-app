import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: retry(fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }), { maxRetries: 3 }),
    refetchOnReconnect: true,
    tagTypes: ['Product'],
    endpoints: builder => ({})
})