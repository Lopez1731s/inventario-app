//features
import { useGetCategoriasQuery } from "../../../features/categorias/categoriasSlice";

//interfaces
import { ICategorias } from "../../../interfaces";

//components
import { ErrorLoading, RoutesLoading } from "../../../components/Loaders";
import { LinkButton, LinkButtonActions, ModalButton, Pagination } from "../../../components/ui";
import { Filters } from "./Filters";
import NewCategoria from "./NewCategoria";
import { useState } from 'react';
import UpdateCategoria from "./UpdateCategoria";

const ListCategorias = () => {

    const [showModal, setShowModal] = useState(false);

    const { data: categorias, isLoading, isError, error } = useGetCategoriasQuery(undefined);

    if (isLoading) return <RoutesLoading />

    if (isError) return <ErrorLoading />


    return (
        <div className="card w-full bg-base-200 shadow-md rounded-md">
            <div className="card-body">
                <div className="flex justify-between mb-3">
                    <h2 className="card-title">Categorias</h2>
                    <div>
                        <LinkButton name="Exportar" action={LinkButtonActions.Export} link="/" variant="ghost" />
                        <ModalButton name="Agregar" action={setShowModal} htmlFor={"new-categoria"} />
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
                        <Pagination />
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