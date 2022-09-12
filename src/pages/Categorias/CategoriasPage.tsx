import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"

const CategoriasPage = () => {
    return (
        <RoutesNotFound>
            <Route path="/" element={<h1>CategoriasPage</h1>} />
        </RoutesNotFound>
    )
}
export default CategoriasPage