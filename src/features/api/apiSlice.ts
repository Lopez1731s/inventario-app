import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: retry(fetchBaseQuery(
        { 
            baseUrl: import.meta.env.VITE_BACKEND_URL,
            prepareHeaders: (headers, { getState }) => {
                headers.set('Authorization', `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`)
                return headers;
            }
        }),
        { maxRetries: 3 }
    ),
    refetchOnReconnect: true,
    tagTypes: ['Categorias', 'Cargos', 'Proveedores', 'Products', 'Marcas'],
    endpoints: builder => ({})
})