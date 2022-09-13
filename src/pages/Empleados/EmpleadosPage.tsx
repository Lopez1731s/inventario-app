import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"
import { ListEmpleados } from "./components"


const EmpleadosPage = () => {
    return (
        <RoutesNotFound>
            <Route path="/" element={<ListEmpleados />} />
            <Route path="crear" element={<h1>Crear</h1>} />
            <Route path="editar/:id" element={<h1>Editar</h1>} />
        </RoutesNotFound>
    )
}
export default EmpleadosPage