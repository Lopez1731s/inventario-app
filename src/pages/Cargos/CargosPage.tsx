import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"
import { ListCargos, NewCargo, UpdateCargo } from "./components"

const CargosPage = () => {
    return (
        <RoutesNotFound>
            <Route path="/" element={<ListCargos />} />
        </RoutesNotFound>
    )
}
export default CargosPage