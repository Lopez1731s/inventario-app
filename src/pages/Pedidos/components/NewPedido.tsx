import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IPedidoForm } from "../../../interfaces";
import { PedidoSchema } from '../../../schemas/PedidoSchema';
import { handleAddPedido } from '../helpers';
import { PedidoForm } from "./Forms";

const NewPedido = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<IPedidoForm>({
        resolver: yupResolver(PedidoSchema),
    })
    const handleCreatePedido = handleAddPedido();

    const onSubmit: SubmitHandler<IPedidoForm> = (data) => handleCreatePedido(data);

    return (
        <div className="card w-full bg-base-200 shadow-md rounded-md">
            <div className="card-body">
                <h1 className="text-2xl font-semibold">Información general</h1>
                <span className="text-primary-base">Agrega la información general del pedido</span>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <PedidoForm
                        register={register}
                        errors={errors}
                    />
                </form>
            </div>
        </div>
    )
}
export default NewPedido