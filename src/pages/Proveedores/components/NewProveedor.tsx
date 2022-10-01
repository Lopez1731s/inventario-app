//react imports
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

//interfaces and schemas
import { Notifications } from "../../../components/ui";
import { IProveedorCreate } from "../../../interfaces";
import { ProveedorSchema } from "../../../schemas";
import { ProveedorCreate } from "../helpers";
import { ProveedorForm } from "./Forms";

const NewProveedor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IProveedorCreate>({
        resolver: yupResolver(ProveedorSchema)
    });

    const { handleAddProveedor } = ProveedorCreate();

    const onSubmit: SubmitHandler<IProveedorCreate> = (data) => handleAddProveedor(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ProveedorForm register={register} errors={errors} />
            <Notifications />
        </form>
    )
}
export default NewProveedor