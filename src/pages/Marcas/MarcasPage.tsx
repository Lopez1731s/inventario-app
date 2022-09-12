import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"

const MarcasPage = () => {
    return (
        <RoutesNotFound>
            <Route path="/" element={<h1>MarcasPage</h1>} />
        </RoutesNotFound>
    )
}
export default MarcasPage