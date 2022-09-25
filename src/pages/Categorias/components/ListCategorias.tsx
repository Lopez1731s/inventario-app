//features
import { useGetCategoriasQuery } from "../../../features/categorias/categoriasSlice";

//interfaces
import { ICategorias, RTKresponse } from "../../../interfaces";

//components
import { useState } from 'react';
import { ErrorLoading, RoutesLoading } from "../../../components/Loaders";
import { LinkButton, LinkButtonActions, ModalButton, ModalDelete, Notifications, NotSelectedOption, Pagination } from "../../../components/ui";
import { Filters } from "./Filters";
import NewCategoria from "./NewCategoria";
import UpdateCategoria from "./UpdateCategoria";
import { ModalButtonActions } from '../../../components/ui/ModalButton';
import DeleteCategoria from "./DeleteCategoria";

type dataResponse = {
    data: ICategorias[];
    totalItems: number;
    currentPage: number;
    previousPage: null;
    nextPage: number;
    totalPages: number;
}
interface ResponseProps extends RTKresponse {
    data: dataResponse;
}

const ListCategorias = () => {
    const [itemToDelete, setItemToDelete] = useState<number>(0);
    const [showModal, setShowModal] = useState<boolean>(false);
    
    const [item, setItem] = useState<number>(0);
    const [updateModal, setUpdateModal] = useState<boolean>(false);

    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(5);

    const { data: categorias, isLoading, isError } = useGetCategoriasQuery<ResponseProps>({
        page,
        limit,
    });

    if (isLoading) return <RoutesLoading />

    if (isError) return <ErrorLoading />


    return (
        <div className="card w-full bg-base-200 shadow-md rounded-md">
            <div className="card-body">
                <div className="flex justify-between mb-3">
                    <h2 className="card-title">Categorias</h2>
                    <div>
                        <LinkButton name="Exportar" action={LinkButtonActions.Export} link="/" variant="ghost" />
                        <ModalButton name="Agregar" action={setShowModal} htmlFor={"new-categoria"} modalAction={ModalButtonActions.Add} />
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
                                    {
                                        categorias?.data.map((categoria: ICategorias, index: number) => (
                                            <tr key={index}>
                                                <td>{categoria.id}</td>
                                                <td>{categoria.nombre}</td>
                                                <td>
                                                    <div className="flex gap-2">
                                                        <button onClick={() => { setUpdateModal(true); setItem(categoria.id) }} className="btn btn-ghost">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                                            </svg>
                                                        </button>

                                                        <ModalDelete
                                                            htmlFor="delete-categoria"
                                                            setShowModal={setShowModal}
                                                            itemToDelete={categoria.id}
                                                            setItemToDelete={setItemToDelete}
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        <Pagination setPage={setPage} setLimit={setLimit} pagination={categorias} />

                    </div>
                    <div className="box">
                        {updateModal ? (<UpdateCategoria itemToUpdate={item} setUpdateModal={setUpdateModal} />) : (<NotSelectedOption title="Selecciona una categoria para editar." />)}
                    </div>
                </div>

                <Notifications />

                {showModal && <NewCategoria setShowModal={setShowModal} />}
                {showModal && <DeleteCategoria id={itemToDelete} setShowModal={setShowModal} />}
            </div>
        </div>
    )
}
export default ListCategorias