import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"

const UsuariosPage = () => {
    return (
        <RoutesNotFound>
            <Route path="/" element={<h1>UsuariosPage</h1>} />
        </RoutesNotFound>
    )
}
export default UsuariosPage