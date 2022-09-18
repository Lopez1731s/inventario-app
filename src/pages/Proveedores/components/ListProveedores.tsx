import { LinkButton, LinkButtonActions, Pagination } from "../../../components/ui"
import { Filters } from "./Filters"

const ListProveedores = () => {
    return (
        <div className="card w-full bg-base-200 shadow-md rounded-md">
            <div className="card-body">
                <div className="flex justify-between mb-3">
                    <h2 className="card-title">Proveedores</h2>

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
                                <th className="bg-primary text-secondary">Nombres</th>
                                <th className="bg-primary text-secondary">Apellidos</th>
                                <th className="bg-primary text-secondary">Empresa</th>
                                <th className="bg-primary text-secondary">Teléfono</th>
                                <th className="bg-primary text-secondary">Correo</th>
                                <th className="bg-primary text-secondary">Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>John Doe</td>
                                <td>Microsoft</td>
                                <td>123456789</td>
                                <td>jonhdoe@gmail.com</td>
                                <td>
                                    <div className="flex gap-2">
                                        <LinkButton action={LinkButtonActions.Edit} link={`editar/`} variant="ghost" />
                                        <LinkButton action={LinkButtonActions.Details} link={`detalle/`} variant="ghost" />
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
export default ListProveedores