import { Link } from "react-router-dom";
import { ErrorLoading, RoutesLoading } from "../../../components/Loaders"
import { Button, LinkButton, LinkButtonActions, Pagination } from "../../../components/ui"
import { useGetProductsQuery } from "../../../features/products/productSlice"
import { Products } from "../../../interfaces";

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
                        <LinkButton name="Exportar" action={LinkButtonActions.Export} link="/productos" variant="ghost" />
                        <LinkButton name="Agregar" action={LinkButtonActions.Add} link="/productos/crear" variant="ghost" />
                    </div>
                </div>

                <div className="flex justify-between mb-3">
                    <div className="flex">
                        <Button name="Filtros" variant="ghost" size="xs" />
                        <button className="btn btn-ghost btn-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <div className="form-control">
                            <input type="text" placeholder="Buscar" className="input input-bordered" />
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto w-full h-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="bg-secondary">ID</th>
                                <th className="bg-secondary">Nombre</th>
                                <th className="bg-secondary">SLUG</th>
                                <th className="bg-secondary">Estado</th>
                                <th className="bg-secondary">Precio tienda</th>
                                <th className="bg-secondary">Precio venta</th>
                                <th className="bg-secondary">Fecha de creación</th>
                                <th className="bg-secondary">Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                productos.data.map((producto: Products, index: number) => (
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
                                                <LinkButton action={LinkButtonActions.Edit} link={`/products/edit/${producto.id}`} variant="ghost" />
                                                <LinkButton action={LinkButtonActions.Details} link={`/products/details/${producto.id}`} variant="ghost" />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                
                <Pagination />
            </div>
        </div>
    )
}
export default ListProducts