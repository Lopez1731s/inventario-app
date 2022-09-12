import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"
import { ListCategorias } from "./components"

const CategoriasPage = () => {
    return (
        <RoutesNotFound>
            <Route path="/" element={<ListCategorias />} />
        </RoutesNotFound>
    )
}
export default CategoriasPage