import { LinkButton, LinkButtonActions } from "../../../components/ui"

const ListCategorias = () => {
    return (
        <div className="card w-full bg-base-200 shadow-md rounded-md">
            <div className="card-body">
                <div className="flex justify-between mb-3">
                    <h2 className="card-title">Categorias</h2>
                    <div>
                        <LinkButton name="Agregar" action={LinkButtonActions.Add} link="crear" variant="ghost" />
                    </div>
                </div>

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
                            {/* <tr>
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
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ListCategorias