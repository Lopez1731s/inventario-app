import { LinkButton, LinkButtonActions, Pagination } from "../../../components/ui"
import { Filters } from "./Filters"
import UpdateMarca from "./UpdateMarca"

const ListMarcas = () => {
    return (
        <div className="card w-full bg-base-200 shadow-md rounded-md">
            <div className="card-body">
                <div className="flex justify-between mb-3">
                    <h2 className="card-title">Marcas</h2>

                    <div>
                        <LinkButton name="Agregar" action={LinkButtonActions.Add} link="crear" variant="ghost" />
                    </div>
                </div>

                <div className="grid overflow-hidden grid-cols-2 gap-6">
                    <div className="box">
                        <Filters />
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th className="bg-primary text-secondary">ID</th>
                                        <th className="bg-primary text-secondary">Nombre</th>
                                        <th className="bg-primary text-secondary">Acciones</th>
                                    </tr>
                                </thead>

                                <tbody>

                                </tbody>
                            </table>
                        </div>
                        {/* <Pagination /> */}
                    </div>
                    <div className="box">
                        <UpdateMarca />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ListMarcas