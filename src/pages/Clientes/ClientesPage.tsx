import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"

const ClientesPage = () => {
    return (
        <RoutesNotFound>
            <Route path="/" element={<>ClientesPage</>} />
        </RoutesNotFound>
    )
}
export default ClientesPage