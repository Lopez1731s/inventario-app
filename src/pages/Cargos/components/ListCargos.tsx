import { useState } from 'react';
import { toast } from 'react-toastify';

//API slice
import { useDeleteCargoMutation, useGetCargosQuery } from '../../../features/cargos/cargosSlice';

import { ICargos, RTKresponse } from '../../../interfaces';

//components
import { ErrorLoading, RoutesLoading } from '../../../components/Loaders';
import { ActionButton, ModalButton, Notifications, Pagination } from '../../../components/ui';
import { LinkButton, LinkButtonActions } from '../../../components/ui/LinkButton';
import { Filters } from './Filters';
import NewCargo from './NewCargo';

interface ResponseProps extends RTKresponse {
    data: ICargos[];
}

const ListCargos = () => {
    const [showModal, setShowModal] = useState(false);

    const { data: cargos, isLoading, isError } = useGetCargosQuery<ResponseProps>(undefined);
    const [deleteCargo] = useDeleteCargoMutation();

    if (isLoading) return <RoutesLoading />

    if (isError) return <ErrorLoading />

    const handleDelete = (id: number) => {
        deleteCargo(id)
            .unwrap()
            .then(() => {
                toast.success("Eliminado correctamente");
            })
            .catch((error) => {
                toast.error("Error al eliminar cargo");
            });
    }

    console.log(cargos);

    return (
        <div className="card w-full bg-base-200 shadow-md rounded-md">
            <div className="card-body">
                <div className="flex justify-between mb-3">
                    <h2 className="card-title">Cargos</h2>
                    <div>
                        <LinkButton name="Exportar" action={LinkButtonActions.Export} link="/" variant="ghost" />
                        <ModalButton name="Agregar" action={setShowModal} htmlFor={"new-cargo"} />
                    </div>
                </div>

                <div className="grid overflow-hidden grid-cols-2 gap-6">
                    <div>
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
                                    {
                                        cargos.length > 0 ? cargos.map((cargo: ICargos, index: number) => (
                                            <tr key={index}>
                                                <td>{cargo.id}</td>
                                                <td>{cargo.nombre}</td>
                                                <td>
                                                    <LinkButton action={LinkButtonActions.Edit} link="/" variant="ghost" />
                                                    <ActionButton handleFunction={() => handleDelete(cargo.id)} id={cargo.id} />
                                                </td>
                                            </tr>
                                        )) : (
                                            <tr>
                                                <td colSpan={3} className="text-center">No hay datos registrados</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                        <Pagination />
                    </div>
                </div>

                {showModal && <NewCargo setShowModal={setShowModal} />}
            </div>

            <Notifications />
        </div>
    )
}
export default ListCargos