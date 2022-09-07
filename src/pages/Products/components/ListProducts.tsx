import { Link } from "react-router-dom";
import { ErrorLoading, RoutesLoading } from "../../../components/Loaders"
import { LinkButton, LinkButtonActions, Pagination } from "../../../components/ui"
import { useGetProductsQuery } from "../../../features/products/productSlice"
import { Products } from "../../../interfaces";

const ListProducts = () => {
    const { data: productos, isLoading, isError, error } = useGetProductsQuery(undefined);
    console.log(productos);

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

                <div className="overflow-x-auto w-full h-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="bg-neutral">ID</th>
                                <th className="bg-neutral">Nombre</th>
                                <th className="bg-neutral">SLUG</th>
                                <th className="bg-neutral">Estado</th>
                                <th className="bg-neutral">Precio tienda</th>
                                <th className="bg-neutral">Precio venta</th>
                                <th className="bg-neutral">Fecha de creación</th>
                                <th className="bg-neutral">Acciones</th>
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