//features
import { useGetCategoriasQuery } from "../../../features/categorias/categoriasSlice";

//interfaces
import { ICategorias, RTKresponse } from "../../../interfaces";

//components
import { useState } from 'react';
import { ErrorLoading, RoutesLoading } from "../../../components/Loaders";
import { LinkButton, LinkButtonActions, ModalButton, Pagination } from "../../../components/ui";
import { Filters } from "./Filters";
import NewCategoria from "./NewCategoria";
import UpdateCategoria from "./UpdateCategoria";
import { ModalButtonActions } from '../../../components/ui/ModalButton';

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

    const [showModal, setShowModal] = useState(false);
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
                                                        <LinkButton action={LinkButtonActions.Edit} link={`editar/${categoria.id}`} variant="ghost" />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        <Pagination
                            setPage={setPage}
                            setLimit={setLimit}
                            pagination={categorias}
                        />

                    </div>
                    <div className="box">
                        <UpdateCategoria />
                    </div>
                </div>


                {showModal && <NewCategoria setShowModal={setShowModal} />}
            </div>
        </div>
    )
}
export default ListCategorias