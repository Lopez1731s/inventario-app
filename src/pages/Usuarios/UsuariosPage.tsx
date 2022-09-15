import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"
import { ListUsuarios, NewUsuario, UpdateUsuario } from "./components"

const UsuariosPage = () => {
    return (
        <RoutesNotFound>
            <Route path="/" element={<ListUsuarios />} />
            <Route path="crear" element={<NewUsuario />} />
            <Route path="editar/:id" element={<UpdateUsuario />} />
        </RoutesNotFound>
    )
}
export default UsuariosPage