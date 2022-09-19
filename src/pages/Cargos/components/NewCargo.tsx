import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { ICargosCreate } from "../../../interfaces";
import { CategoriaSchema } from "../../../schemas";

import { Button, Input, Notifications } from "../../../components/ui"
import { useCreateCargoMutation } from "../../../features/cargos/cargosSlice";
import { FC } from "react";
import { toast } from 'react-toastify';

interface IFormInputs {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewCargo: FC<IFormInputs> = ({ setShowModal }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ICargosCreate>({
        resolver: yupResolver(CategoriaSchema)
    });

    const [createCargo] = useCreateCargoMutation();

    const onSubmit: SubmitHandler<ICargosCreate> = async (data) => {
        await createCargo(data)
            .unwrap()
            .then(() => {
                toast.success("Cargo creado correctamente");
                reset();
            })
            .catch((error) => {
                toast.error("Error al crear cargo");
            });
    }

    return (
        <>
            <input type="checkbox" id="new-cargo" className="modal-toggle" />
            <label htmlFor="new-cargo" className="modal cursor-pointer">

                <label className="modal-box relative" htmlFor="">
                    <label htmlFor="new-cargo" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Nuevo cargo</h3>
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
                        <div className="mt-4 flex justify-end">
                            <Button name="Guardar" variant="primary" />
                        </div>
                    </form>
                </label>
            </label>

            <Notifications />

        </>
    )
}
export default NewCargo