import { LinkButton, LinkButtonActions, Notifications, Pagination } from "../../../components/ui"
import { useGetPedidosQuery } from "../../../features/pedidos/pedidosSlice"
import { Filters } from "./Filters"
import { useState } from 'react';
import { ErrorLoading, RoutesLoading } from "../../../components/Loaders";
import { IPedido } from "../../../interfaces";

const ListPedido = () => {
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(5);

    const { data: pedidos, isLoading, isError } = useGetPedidosQuery({ page, limit });

    if (isLoading) return <RoutesLoading />

    if (isError) return <ErrorLoading />

    return (
        <div className="card w-full bg-base-200 shadow-md rounded-md">
            <Notifications />
            <div className="card-body">
                <div className="flex justify-between mb-3">
                    <h2 className="card-title">Pedidos</h2>

                    <div>
                        <LinkButton name="Exportar" action={LinkButtonActions.Export} link="/" variant="ghost" />
                        <LinkButton name="Agregar" action={LinkButtonActions.Add} link="crear" variant="ghost" />
                    </div>
                </div>

                <Filters />

                <div className="overflow-x-auto w-full h-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="bg-primary text-secondary">ID</th>
                                <th className="bg-primary text-secondary">Fecha de creación</th>
                                <th className="bg-primary text-secondary">Estado de Envio</th>
                                <th className="bg-primary text-secondary">Estado de Pago</th>
                                <th className="bg-primary text-secondary">Total</th>
                                <th className="bg-primary text-secondary">Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                pedidos.data.length > 0 ? pedidos.data.map((pedido: IPedido, index: number) => (
                                    <tr key={index}>
                                        <td>{pedido.id}</td>
                                        <td>{new Date(pedido.createdAt).toLocaleDateString()}</td>
                                        <td>{pedido.estadoEnvio}</td>
                                        <td>{pedido.estadoPago}</td>
                                        <td>{pedido.total}</td>
                                        <td></td>
                                    </tr>

                                )) : <tr><td colSpan={6}>No hay pedidos</td></tr>
                            }
                        </tbody>
                    </table>
                </div>

                <Pagination
                    setPage={setPage}
                    setLimit={setLimit}
                    pagination={pedidos}
                />
            </div>
        </div>
    )
}
export default ListPedido