import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"

const DashboardPage = () => {
    return (
        <RoutesNotFound>
            <Route path="/" element={<h1>DashboardPage</h1>} />
        </RoutesNotFound>
    )
}
export default DashboardPage