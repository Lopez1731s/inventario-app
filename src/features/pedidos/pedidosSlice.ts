import { IPedidoCreate, IPedidoForm, Pagination } from "../../interfaces";
import { apiSlice } from "../api/apiSlice";

export const pedidosSlice = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        getPedidos: build.query({
            query: (args: Pagination) => `/pedidos?page=${args.page}&limit=${args.limit}`,
            providesTags: ["Pedidos"],
        }),
        createPedido: build.mutation({
            query: (pedido: IPedidoCreate) => ({
                url: "/pedidos",
                method: "POST",
                body: pedido,
            }),
            invalidatesTags: ["Pedidos"],
            extraOptions: { maxRetries: 1 },
        }),
    }),
});

export const { useGetPedidosQuery, useCreatePedidoMutation } = pedidosSlice;