import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "../../../components/ui";
import { useCreateCategoriaMutation } from "../../../features/categorias/categoriasSlice";

import { ICategoriasCreate } from "../../../interfaces";
import { CategoriaSchema } from "../../../schemas";

interface NewCategoriaProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewCategoria: FC<NewCategoriaProps> = ({ setShowModal }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ICategoriasCreate>({
        resolver: yupResolver(CategoriaSchema)
    });

    const [createCategoria, { isLoading, isError, isSuccess, error }] = useCreateCategoriaMutation();

    const onSubmit: SubmitHandler<ICategoriasCreate> = (data) => {
        createCategoria(data);
        setShowModal(false);
        reset();
    }

    return (
        <>
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
export default NewCategoria