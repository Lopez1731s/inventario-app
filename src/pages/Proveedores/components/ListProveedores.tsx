import { useGetProveedoresQuery } from "../../../features/proveedores/proveedoresSlice";

import { IProveedor } from '../../../interfaces/Proveedor';

import { ErrorLoading, RoutesLoading } from "../../../components/Loaders";
import { LinkButton, LinkButtonActions, Pagination } from "../../../components/ui";
import { Filters } from "./Filters";

const ListProveedores = () => {

    const { data: proveedores, isLoading, isError } = useGetProveedoresQuery(undefined);

    if (isLoading) return <RoutesLoading />

    if (isError) return <ErrorLoading />

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
                            {
                                proveedores.data.length > 0 ? proveedores.data.map((proveedor: IProveedor, index: number) => (
                                    <tr key={index}>
                                        <td>{proveedor.id}</td>
                                        <td>{proveedor.primerNombre} {proveedor.segundoNombre}</td>
                                        <td>{proveedor.primerApellido} {proveedor.segundoApellido}</td>
                                        <td>{proveedor.empresa}</td>
                                        <td>{proveedor.telefono}</td>
                                        <td>{proveedor.correo}</td>
                                        <td>
                                            <div className="flex gap-2">
                                                <LinkButton action={LinkButtonActions.Edit} link={`editar/`} variant="ghost" />
                                                <LinkButton action={LinkButtonActions.Details} link={`detalle/`} variant="ghost" />
                                            </div>
                                        </td>
                                    </tr>
                                )) : <tr><td colSpan={7} className="text-center">No hay proveedores registrados</td></tr>
                            }
                        </tbody>
                    </table>
                </div>

                <Pagination />
            </div>
        </div>
    )
}
export default ListProveedores