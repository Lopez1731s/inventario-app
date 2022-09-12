import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"

const CargosPage = () => {
    return (
        <RoutesNotFound>
            <Route path="/" element={<h1>CargosPage</h1>} />
        </RoutesNotFound>
    )
}
export default CargosPage