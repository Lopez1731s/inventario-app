import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useGetCargoQuery, useUpdateCargoMutation } from '../../../features/cargos/cargosSlice';

import { ICargosUpdate } from "../../../interfaces";
import { CargoSchema } from "../../../schemas";

import { toast } from "react-toastify";
import { ErrorLoading, RoutesLoading } from "../../../components/Loaders";
import { Button, Input } from "../../../components/ui";

interface UpdateCargoProps {
    itemToUpdate: number;
    setUpdateModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdateCargo: FC<UpdateCargoProps> = ({ itemToUpdate, setUpdateModal }) => {
    const { data: cargo, isLoading, isError } = useGetCargoQuery(itemToUpdate);

    const [updateCargo] = useUpdateCargoMutation();

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<ICargosUpdate>({
        resolver: yupResolver(CargoSchema)
    });

    const onSubmit: SubmitHandler<ICargosUpdate> = (data) => {
        const cargoData = {
            ...data,
            id: itemToUpdate
        } as ICargosUpdate;

        updateCargo(cargoData)
            .unwrap()
            .then(() => { toast.success('Cargo actualizado correctamente'); setUpdateModal(false) })
            .catch((error) => error.status === 409 ? toast.error("Ya existe un cargo con ese nombre") : toast.error("Error al actualizar el cargo"));
    }

    useEffect(() => {
        if (cargo) setValue("nombre", cargo.nombre);
    }, [cargo])

    if (isLoading) return <RoutesLoading />

    if (isError) return <ErrorLoading />

    return (
        <div className="px-12">
            <h3 className="text-lg font-bold">Actualizar cargo : {cargo.nombre}</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-8">
                    <Input
                        name="nombre"
                        variant="primary"
                        type="text"
                        placeholder="Nombre cargo"
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
export default UpdateCargo