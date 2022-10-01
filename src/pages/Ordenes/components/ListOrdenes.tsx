import { useState } from "react";
import { Link } from "react-router-dom";
import { ErrorLoading, RoutesLoading } from "../../../components/Loaders";
import { LinkButton, LinkButtonActions, Pagination } from "../../../components/ui";
import { useGetOrdenesQuery } from "../../../features/ordenes/ordenesSlice";
import { IOrden, RTKresponse } from "../../../interfaces";

type dataResponse = {
    data: IOrden[];
    totalItems: number;
    currentPage: number;
    previousPage: null;
    nextPage: number;
    totalPages: number;
}
interface ResponseProps extends RTKresponse {
    data: dataResponse;
}

const ListOrdenes = () => {
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(5);

    const { data: ordenes, isLoading, isError } = useGetOrdenesQuery<ResponseProps>({ page, limit });

    if (isLoading) return <RoutesLoading />

    if (isError) return <ErrorLoading />

    return (
        <div className="card w-full bg-base-200 shadow-md rounded-md">
            <div className="card-body">
                <div className="flex justify-between mb-3">
                    <h2 className="card-title">Ordenes</h2>

                    <div>
                    </div>
                </div>

                <div className="overflow-x-auto w-full h-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="bg-primary text-secondary">ID</th>
                                <th className="bg-primary text-secondary">Fecha de la Orden</th>
                                <th className="bg-primary text-secondary">Total</th>
                                <th className="bg-primary text-secondary">Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                ordenes.data.length > 0 ? ordenes.data.map((orden: IOrden) => (
                                    <tr key={orden.id}>
                                        <td>{orden.id}</td>
                                        <td>{new Date(orden.createdAt).toLocaleDateString()}</td>
                                        <td>{orden.total}</td>
                                        <td></td>
                                    </tr>
                                )) : (<tr><td colSpan={8} className="text-center">No hay ordenes</td></tr>)
                            }
                        </tbody>
                    </table>
                </div>

                <Pagination
                    setPage={setPage}
                    setLimit={setLimit}
                    pagination={ordenes}
                />
            </div>
        </div>

    )
}
export default ListOrdenes