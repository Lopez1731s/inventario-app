import { useState } from "react"
import { ErrorLoading, RoutesLoading } from "../../../components/Loaders"
import { LinkButton, LinkButtonActions, ModalButton, ModalButtonActions, NotSelectedOption, Pagination } from "../../../components/ui"
import { useGetMarcasQuery } from "../../../features/marcas/marcaSlice"
import { IMarca } from "../../../interfaces"
import { Filters } from "./Filters"
import NewMarca from "./NewMarca"
import UpdateMarca from "./UpdateMarca"

const ListMarcas = () => {
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(5);

    const [showModal, setShowModal] = useState<boolean>(false);

    const [item, setItem] = useState<number>(0);
    const [updateModal, setUpdateModal] = useState<boolean>(false);

    const { data: marcas, isLoading, isError } = useGetMarcasQuery({ page, limit });
    // console.log(marcas);

    if (isLoading) return <RoutesLoading />

    if (isError) return <ErrorLoading />

    return (
        <div className="card w-full bg-base-200 shadow-md rounded-md">
            <div className="card-body">
                <div className="flex justify-between mb-3">
                    <h2 className="card-title">Marcas</h2>

                    <div>
                        <ModalButton name="Agregar" action={setShowModal} htmlFor={"new-marca"} modalAction={ModalButtonActions.Add} />
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
                                        marcas.data.map((marca: IMarca) => (
                                            <tr key={marca.id}>
                                                <td>{marca.id}</td>
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src={marca.imagen} alt={marca.nombre} />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">{marca.nombre}</div>
                                                            <div className="text-sm opacity-50">Marca</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex gap-2">

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
                            pagination={marcas}
                        />
                    </div>
                    <div className="box">
                        {updateModal ? (<UpdateMarca />) : <NotSelectedOption title="Seleccione una marca a editar." />}
                        {showModal && (<NewMarca />)}
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ListMarcas