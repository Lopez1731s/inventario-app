import { Link } from "react-router-dom";
import { LinkOptions } from ".";
import { ErrorLoading, RoutesLoading } from "../../../components/Loaders";
import { useGetOrdenesQuery } from "../../../features/ordenes/ordenesSlice";
import { useGetPedidosQuery } from "../../../features/pedidos/pedidosSlice";
import { useGetProductsQuery } from "../../../features/products/productSlice";
import { useGetProveedoresQuery } from "../../../features/proveedores/proveedoresSlice";
import { IOrden } from "../../../interfaces";

const MainPage = () => {

    const { data: ordenes, isLoading, isError } = useGetOrdenesQuery({ page: 1, limit: 5 });
    const { data: Productos } = useGetProductsQuery({ page: 1, limit: 1000000 });
    const { data: Pedidos } = useGetPedidosQuery({ page: 1, limit: 1000000 });
    const { data: Proveedores } = useGetProveedoresQuery({ page: 1, limit: 1000000 });

    if (isLoading) return <RoutesLoading />

    if (isError) return <ErrorLoading />

    return (
        <div>
            <h1 className="text-3xl">Bienvenido, admin@example.com </h1>
            <p className="text-gray-500">Esta es información general de la tienda</p>

            <div className="flex gap-8 mt-12">
                <div className="w-full">
                    <div className="stats shadow w-full rounded-md">
                        <div className="stat bg-base-200">
                            <div className="stat-figure text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                </svg>
                            </div>
                            <div className="stat-title">Productos</div>
                            <div className="stat-value">{Productos?.data.length}</div>

                            <div className="stat-desc">{new Date().getFullYear()}</div>
                        </div>

                        <div className="stat bg-base-200">
                            <div className="stat-figure text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                            </div>
                            <div className="stat-title">Proveedores</div>
                            <div className="stat-value">{Proveedores?.data.length}</div>

                            <div className="stat-desc">#{Proveedores?.data.length} actuales</div>

                        </div>

                        <div className="stat bg-base-200">
                            <div className="stat-figure text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003 6.97 2.789ZM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461L10.404 2Z" />
                                </svg>
                            </div>
                            <div className="stat-title">Pedidos</div>
                            <div className="stat-value">{Pedidos?.data.length}</div>

                            <div className="stat-desc">{new Date().getFullYear()}</div>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-1 mt-12 w-full">
                        <LinkOptions link="/app/ordenes" title="Ordenes" />
                        <LinkOptions link="/app/pedidos" title="Pedidos" />
                        <LinkOptions link="/app/productos" title="Productos" />
                    </div>

                    <div className="card w-full bg-base-200 shadow-md rounded-md mt-12">
                        <div className="card-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatum temporibus ipsam labore error excepturi? Iure, alias quibusdam sed ducimus tempore saepe consequatur quas assumenda accusantium nesciunt expedita. Aperiam, quo.
                        </div>
                    </div>
                </div>

                <div className="w-1/2">
                    <div className="card w-full bg-base-200 shadow-md rounded-md">
                        <div className="card-body">
                            <div className="flex justify-between mb-3">
                                <h2 className="card-title">Ultimas ordenes</h2>
                            </div>
                            {
                                ordenes.data.length > 0 ? ordenes.data.map((orden: IOrden) => (
                                    <div className="bg-base-300 rounded-md p-3" key={orden.id}>
                                        <div className="flex justify-between">
                                            <div>
                                                <h1 className="text-lg">#{orden.id}</h1>
                                            </div>
                                            <div>
                                                <p className="text-primary">{new Date(orden.createdAt).toLocaleTimeString()}</p>
                                            </div>
                                        </div>
                                        <p className="text-primary">Total: {orden.total}</p>
                                    </div>
                                )) : <p>No hay ordenes</p>
                            }

                            <div className="flex justify-end mt-3">
                                <Link to="/app/ordenes" className="link link-primary">Ver mas</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainPage