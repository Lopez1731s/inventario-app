import { FC } from "react";

import { useCreateCategoriaMutation } from "../../../features/categorias/categoriasSlice";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { ICategoriasCreate } from "../../../interfaces";
import { CategoriaSchema } from "../../../schemas";

import { Button, Input, Notifications } from "../../../components/ui";

interface NewCategoriaProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewCategoria: FC<NewCategoriaProps> = ({ setShowModal }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ICategoriasCreate>({
        resolver: yupResolver(CategoriaSchema)
    });

    const [createCategoria] = useCreateCategoriaMutation();

    const onSubmit: SubmitHandler<ICategoriasCreate> = (data) => {
        createCategoria(data)
            .unwrap()
            .then(() => {
                toast.success("Categoria creada con exito");
                reset();
            })
            .catch((error) => {
                if (error.status === 409) {
                    toast.error("Ya existe una categoria con ese nombre");
                }
                else {
                    toast.error("Error al crear la categoria");
                }
            })
    }

    return (
        <>
            <Notifications />
            <input type="checkbox" id="new-categoria" className="modal-toggle" />
            <label htmlFor="new-categoria" className="modal cursor-pointer">

                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Nueva categoria</h3>
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
                        <div className="mt-4 flex justify-end">
                            <Button name="Guardar" variant="primary" />
                        </div>
                    </form>
                </label>
            </label>
        </>
    )
}
export default NewCategoria