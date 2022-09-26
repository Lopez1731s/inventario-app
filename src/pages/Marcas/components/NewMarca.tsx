import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "../../../components/ui";
import { useCreateMarcaMutation } from "../../../features/marcas/marcaSlice";
import { IMarcaCreate } from '../../../interfaces/Marcas';
import { MarcaSchema } from "../../../schemas";

const NewMarca = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IMarcaCreate>({
        resolver: yupResolver(MarcaSchema)
    });


    const [createMarca] = useCreateMarcaMutation();

    const onSubmit: SubmitHandler<IMarcaCreate> = async (data) => {
        console.log(data.imagen[0]);
        // createMarca(data)
        //     .unwrap()
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err))
    };

    return (
        <>
            <input type="checkbox" id="new-marca" className="modal-toggle" />
            <label htmlFor="new-marca" className="modal cursor-pointer">

                <label className="modal-box relative" htmlFor="">
                    <label htmlFor="new-marca" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Nueva marca</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-8">
                            <Input
                                name="nombre"
                                variant="primary"
                                type="text"
                                placeholder="Nombre de la marca"
                                register={register}
                                errors={errors}
                            />

                            <Input
                                name="imagen"
                                variant="primary"
                                type="file"
                                placeholder="Imagen de la marca"
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
export default NewMarca