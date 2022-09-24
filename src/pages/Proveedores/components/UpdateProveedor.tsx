import { useEffect } from 'react';
import { useParams } from "react-router-dom";

import { useGetProveedorQuery, useUpdateProveedorMutation } from "../../../features/proveedores/proveedoresSlice";

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


import { IProveedorUpdate } from "../../../interfaces";
import { ProveedorSchema } from '../../../schemas';

import { ErrorLoading, RoutesLoading } from "../../../components/Loaders";
import { Notifications } from '../../../components/ui';
import { ProveedorForm } from './Forms';

const UpdateProveedor = () => {
    const { id } = useParams();

    const { data: proveedor, isLoading, isError } = useGetProveedorQuery(id as string);
    const [updateProveedor] = useUpdateProveedorMutation();

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<IProveedorUpdate>({
        resolver: yupResolver(ProveedorSchema),
        defaultValues: {
            primerNombre: "",
            segundoNombre: "",
            primerApellido: "",
            segundoApellido: "",
            telefono: "",
            correo: "",
            empresa: "",
        }
    });

    const onSubmit: SubmitHandler<IProveedorUpdate> = async (data) => {
        const proveedorData = {
            ...data,
            id,
        } as IProveedorUpdate;

        await updateProveedor(proveedorData)
            .unwrap()
            .then(() => toast.success('Proveedor actualizado correctamente'))
            .catch(() => toast.error('Error al actualizar el proveedor'));
    }


    useEffect(() => {
        if (proveedor) {
            setValue('primerNombre', proveedor.primerNombre);
            setValue('segundoNombre', proveedor.segundoNombre);
            setValue('primerApellido', proveedor.primerApellido);
            setValue('segundoApellido', proveedor.segundoApellido);
            setValue('telefono', proveedor.telefono);
            setValue('correo', proveedor.correo);
            setValue('empresa', proveedor.empresa);
        }
    }, [proveedor]);

    if (isLoading) return <RoutesLoading />

    if (isError) return <ErrorLoading />

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Notifications />
            <ProveedorForm register={register} errors={errors} />
        </form>
    )
}
export default UpdateProveedor