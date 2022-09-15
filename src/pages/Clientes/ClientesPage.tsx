import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"
import { ListClientes, NewCliente, UpdateCliente } from "./components"

const ClientesPage = () => {
    return (
        <RoutesNotFound>
            <Route path="/" element={<ListClientes />} />
            <Route path="/crear" element={<NewCliente />} />
            <Route path="/editar/:id" element={<UpdateCliente />} />
        </RoutesNotFound>
    )
}
export default ClientesPage