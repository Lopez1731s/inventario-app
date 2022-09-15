import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"
import { ListProveedores, NewProveedor, UpdateProveedor } from "./components"

const ProveedoresPage = () => {
    return (
        <RoutesNotFound>
            <Route path="/" element={<ListProveedores />} />
            <Route path="crear" element={<NewProveedor />} />
            <Route path="editar/:id" element={<UpdateProveedor />} />
        </RoutesNotFound>
    )
}
export default ProveedoresPage