import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"

const ProveedoresPage = () => {
    return (
        <RoutesNotFound>
            <Route path="/" element={<h1>ProveedoresPage</h1>} />
        </RoutesNotFound>
    )
}
export default ProveedoresPage