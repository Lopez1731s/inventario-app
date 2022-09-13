import { ErrorLoading, RoutesLoading } from "../../../components/Loaders";
import { LinkButton, LinkButtonActions, Pagination } from "../../../components/ui";
import { useGetProductsQuery } from "../../../features/products/productSlice";
import { IProducts } from "../../../interfaces";
import { Filters } from "./Filters";

const ListProducts = () => {
    const { data: productos, isLoading, isError, error } = useGetProductsQuery(undefined);

    if (isLoading) return <RoutesLoading />

    if (isError) return <ErrorLoading />

    return (
        <div className="card w-full bg-base-200 shadow-md rounded-md">
            <div className="card-body">
                <div className="flex justify-between mb-3">
                    <h2 className="card-title">Productos</h2>
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
                                <th className="bg-primary text-secondary">Nombre</th>
                                <th className="bg-primary text-secondary">SLUG</th>
                                <th className="bg-primary text-secondary">Estado</th>
                                <th className="bg-primary text-secondary">Precio tienda</th>
                                <th className="bg-primary text-secondary">Precio venta</th>
                                <th className="bg-primary text-secondary">Fecha de creación</th>
                                <th className="bg-primary text-secondary">Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                productos.data.map((producto: IProducts, index: number) => (
                                    <tr key={index}>
                                        <td>{producto.id}</td>

                                        <td>
                                            {producto.nombre}
                                            <br />
                                            <span className="text-sm opacity-50">SKU: {producto.sku}</span>
                                        </td>

                                        <td>{producto.slug}</td>

                                        <td><span className="badge badge-sm mr-2">{producto.disponible ? "Disponible" : "No disponible"}</span></td>

                                        <td>{producto.precioTienda}</td>

                                        <td>{producto.precioVenta}</td>

                                        <td>{new Date(producto.createdAt).toLocaleDateString()}</td>

                                        <td>
                                            <div className="flex gap-2">
                                                <LinkButton action={LinkButtonActions.Edit} link={`editar/${producto.id}`} variant="ghost" />
                                                <LinkButton action={LinkButtonActions.Details} link={`detalle/${producto.id}`} variant="ghost" />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }

                            <tr>
                                <td>1</td>
                                <td>
                                    Producto 1
                                    <br />
                                    <span className="text-sm opacity-50">SKU: 123456789</span>
                                </td>

                                <td>producto-1</td>

                                <td><span className="badge badge-sm mr-2">Disponible</span></td>

                                <td>$ 100.00</td>

                                <td>$ 120.00</td>

                                <td>2021-08-01</td>

                                <td>
                                    <div className="flex gap-2">
                                        <LinkButton action={LinkButtonActions.Edit} link={`/products/edit/1`} variant="ghost" />
                                        <LinkButton action={LinkButtonActions.Details} link={`/products/details/1`} variant="ghost" />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Pagination />
            </div>
        </div>
    )
}
export default ListProducts