import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useCreatePedidoMutation } from "../../../features/pedidos/pedidosSlice";
import { IPedidoForm } from "../../../interfaces";

export const handleAddPedido = () => {
    const navigate = useNavigate();
    const [createPedido] = useCreatePedidoMutation();

    const handleCreatePedido = (data: IPedidoForm) => {
        const newData = {
            proveedorId: data.proveedorId,
            detallePedidos: [
                {
                    productoId: data.productoId,
                    cantidad: data.cantidad,
                    precio: data.precio,
                }
            ],
            fechaEntrega: data.fechaEntrega
        }

        createPedido(newData)
            .unwrap()
            .then(() => { toast.success("Pedido creado correctamente"); navigate("/app/pedidos") })
            .catch(() => toast.error("Error al crear el pedido"))
    };

    return handleCreatePedido;
}