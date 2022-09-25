import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";

import { useGetCategoriaQuery, useUpdateCategoriaMutation } from "../../../features/categorias/categoriasSlice";

import { ICategoriasUpdate } from "../../../interfaces";
import { CategoriaSchema } from "../../../schemas";

import { toast } from 'react-toastify';
import { ErrorLoading, RoutesLoading } from "../../../components/Loaders";
import { Button, Input } from "../../../components/ui";

interface UpdateCategoriaProps {
    itemToUpdate: number;
    setUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdateCategoria: FC<UpdateCategoriaProps> = ({ itemToUpdate, setUpdateModal }) => {
    const { data: categoria, isLoading, isError } = useGetCategoriaQuery(itemToUpdate);

    const [updateCategoria] = useUpdateCategoriaMutation();

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<ICategoriasUpdate>({
        resolver: yupResolver(CategoriaSchema)
    });

    const onSubmit: SubmitHandler<ICategoriasUpdate> = (data) => {
        const categoriaData = {
            ...data,
            id: itemToUpdate
        } as ICategoriasUpdate;

        updateCategoria(categoriaData)
            .unwrap()
            .then(() => { toast.success('Categoria actualizada correctamente'); setUpdateModal(false) })
            .catch((error) => error.status === 409 ? toast.error("Ya existe una categoria con ese nombre") : toast.error("Error al actualizar la categoria"));
    }

    useEffect(() => {
        if (categoria) setValue("nombre", categoria.nombre);
    }, [categoria])

    if (isLoading) return <RoutesLoading />

    if (isError) return <ErrorLoading />

    return (
        <div className="px-12">
            <h3 className="text-lg font-bold">Actualizar categoria : {categoria.nombre}</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-8">
                    <Input
                        name="nombre"
                        variant="primary"
                        type="text"
                        placeholder="Nombre categoria"
                        register={register}
                        errors={errors}
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <button className="btn" onClick={() => setUpdateModal(false)}>cerrar</button>
                    <Button name="Guardar" variant="primary" />
                </div>
            </form>
        </div>
    )
}
export default UpdateCategoria