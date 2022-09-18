import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { ICargosCreate } from "../../../interfaces";
import { CategoriaSchema } from "../../../schemas";

import { Button, Input } from "../../../components/ui"
import { useCreateCargoMutation } from "../../../features/cargos/cargosSlice";
import { FC } from "react";

interface IFormInputs {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewCargo: FC<IFormInputs> = ({ setShowModal }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ICargosCreate>({
        resolver: yupResolver(CategoriaSchema)
    });

    const [createCargo, {isError, isLoading}] = useCreateCargoMutation();

    const onSubmit: SubmitHandler<ICargosCreate> = (data) => {
        createCargo(data);
        setShowModal(false);
        reset();
    }

    return (
        <>
            <input type="checkbox" id="new-cargo" className="modal-toggle" />
            <label htmlFor="new-cargo" className="modal cursor-pointer">

                <label className="modal-box relative" htmlFor="">
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

                            {isError && <p className="text-error text-sm">Error</p>}
                        </div>
                        <div className="mt-4 flex justify-end">
                            <Button name="Guardar" variant="primary" />
                        </div>
                    </form>
                </label>
            </label>
        </>
    )
}
export default NewCargo