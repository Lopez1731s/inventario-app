import { useState } from 'react';

import { useGetProveedoresQuery } from "../../../features/proveedores/proveedoresSlice";

import { IProveedor } from '../../../interfaces/Proveedor';

import { ErrorLoading, RoutesLoading } from "../../../components/Loaders";
import { LinkButton, LinkButtonActions, ModalDelete, Notifications, Pagination } from "../../../components/ui";
import { RTKresponse } from '../../../interfaces';
import { Filters } from "./Filters";
import DeleteProveedor from './DeleteProveedor';

type dataResponse = {
    data: IProveedor[];
    totalItems: number;
    currentPage: number;
    previousPage: null;
    nextPage: number;
    totalPages: number;
}
interface ResponseProps extends RTKresponse {
    data: dataResponse;
}

const ListProveedores = () => {

    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(5);

    const [showModal, setShowModal] = useState<boolean>(false);
    const [itemToDelete, setItemToDelete] = useState<number>(0);

    const { data: proveedores, isLoading, isError } = useGetProveedoresQuery<ResponseProps>({
        page,
        limit,
    });

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
                                        <td>{proveedor.telefono ? proveedor.telefono : '-'}</td>
                                        <td>{proveedor.correo}</td>
                                        <td>
                                            <div className="flex gap-2">
                                                <LinkButton action={LinkButtonActions.Edit} link={`editar/${proveedor.id}`} variant="ghost" />
                                                <ModalDelete htmlFor="delete-proveedor" setShowModal={setShowModal} itemToDelete={proveedor.id} setItemToDelete={setItemToDelete} />
                                            </div>
                                        </td>
                                    </tr>
                                )) : <tr><td colSpan={7} className="text-center">No hay proveedores registrados</td></tr>
                            }
                        </tbody>
                    </table>
                </div>

                {showModal && (<DeleteProveedor id={itemToDelete} setShowModal={setShowModal} />)}
                
                <Notifications />

                <Pagination
                    setPage={setPage}
                    setLimit={setLimit}
                    pagination={proveedores}
                />
            </div>
        </div>
    )
}
export default ListProveedores