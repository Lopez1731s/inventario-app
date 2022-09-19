//react imports
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from 'react-toastify';

//rtk-query
import { useCreateProveedorMutation } from "../../../features/proveedores/proveedoresSlice";

//interfaces and schemas
import { Button, Input, Notifications } from "../../../components/ui";
import { IProveedorCreate } from "../../../interfaces";
import { ProveedorSchema } from "../../../schemas";
import { ProveedorForm } from "./Forms";

const NewProveedor = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<IProveedorCreate>({
        resolver: yupResolver(ProveedorSchema)
    });

    const [createProveedor] = useCreateProveedorMutation();

    const onSubmit: SubmitHandler<IProveedorCreate> = async (data) => {
        await createProveedor(data)
            .unwrap()
            .then(() => {
                toast.success('Proveedor creado correctamente');
                reset();
            })
            .catch(() => {
                toast.error("Error al crear proveedor");
            });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ProveedorForm register={register} errors={errors} />
            <Notifications />
        </form>
    )
}
export default NewProveedor