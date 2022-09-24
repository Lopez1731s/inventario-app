import { LinkButton, LinkButtonActions, Pagination } from "../../../components/ui"
import { Filters } from "./Filters"

const ListUsuarios = () => {
    return (
        <div className="card w-full bg-base-200 shadow-md rounded-md">
            <div className="card-body">
                <div className="flex justify-between mb-3">
                    <h2 className="card-title">Usuarios</h2>

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
                                <th className="bg-primary text-secondary">Correo</th>
                                <th className="bg-primary text-secondary">Acciones</th>
                            </tr>
                        </thead>

                        <tbody>

                        </tbody>
                    </table>
                </div>

                {/* <Pagination /> */}
            </div>
        </div>
    )
}
export default ListUsuarios