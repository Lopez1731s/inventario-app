import { useState } from 'react';

//API slice
import { useGetCargosQuery } from '../../../features/cargos/cargosSlice';

import { ICargos, RTKresponse } from '../../../interfaces';

//components
import { ErrorLoading, RoutesLoading } from '../../../components/Loaders';
import { ModalButton, ModalDelete, Notifications, NotSelectedOption } from '../../../components/ui';
import { LinkButton, LinkButtonActions } from '../../../components/ui/LinkButton';
import { ModalButtonActions } from '../../../components/ui/ModalButton';
import { Filters } from './Filters';
import NewCargo from './NewCargo';
import UpdateCargo from './UpdateCargo';
import DeleteCargo from './DeleteCargo';

interface ResponseProps extends RTKresponse {
    data: ICargos[];
}

const ListCargos = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [itemToDelete, setItemToDelete] = useState<number>(0);

    const [item, setItem] = useState<number>(0);
    const [modalUpdate, setModalUpdate] = useState<boolean>(false);

    const { data: cargos, isLoading, isError } = useGetCargosQuery<ResponseProps>(undefined);

    if (isLoading) return <RoutesLoading />

    if (isError) return <ErrorLoading />

    return (
        <div className="card w-full bg-base-200 shadow-md rounded-md">
            <div className="card-body">
                <div className="flex justify-between mb-3">
                    <h2 className="card-title">Cargos</h2>
                    <div>
                        <ModalButton name="Agregar" action={setShowModal} htmlFor={"new-cargo"} modalAction={ModalButtonActions.Add} />
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
                                                    <div className="flex gap-2">
                                                        <button onClick={() => { setModalUpdate(true); setItem(cargo.id) }} className="btn btn-ghost">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                                            </svg>
                                                        </button>

                                                        <ModalDelete
                                                            htmlFor="delete-cargo"
                                                            setShowModal={setShowModal}
                                                            itemToDelete={cargo.id}
                                                            setItemToDelete={setItemToDelete}
                                                        />
                                                    </div>
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
                    </div>

                    <div>
                        {modalUpdate ? (<UpdateCargo itemToUpdate={item} setUpdateModal={setModalUpdate} />) : (<NotSelectedOption title="Selecciona un cargo para editar" />)}
                    </div>
                </div>

                {showModal && <NewCargo setShowModal={setShowModal} />}
                {showModal && <DeleteCargo id={itemToDelete} setShowModal={setShowModal} />}
            </div>

            <Notifications />
        </div>
    )
}
export default ListCargos