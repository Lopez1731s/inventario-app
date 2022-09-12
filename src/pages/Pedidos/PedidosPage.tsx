import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"

const PedidosPage = () => {
    return (
        <RoutesNotFound>
            <Route path="/" element={<h1>PedidosPage</h1>} />
        </RoutesNotFound>
    )
}
export default PedidosPage