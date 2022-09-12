import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"

const EmpleadosPage = () => {
    return (
        <RoutesNotFound>
            <Route path="/" element={<h1>EmpleadosPage</h1>} />
        </RoutesNotFound>
    )
}
export default EmpleadosPage