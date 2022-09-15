import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"
import { ListPedido, NewPedido, UpdatePedido } from "./components"

const PedidosPage = () => {
    return (
        <RoutesNotFound>
            <Route path="/" element={<ListPedido />} />
            <Route path="crear" element={<NewPedido />} />
            <Route path="editar/:id" element={<UpdatePedido />} />
        </RoutesNotFound>
    )
}
export default PedidosPage