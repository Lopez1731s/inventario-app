import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"
import { ListMarcas, NewMarca, UpdateMarca } from "./components"

const MarcasPage = () => {
    return (
        <RoutesNotFound>
            <Route path="/" element={<ListMarcas />} />
            <Route path="crear" element={<NewMarca />} />
            <Route path="editar/:id" element={<UpdateMarca />} />
        </RoutesNotFound>
    )
}
export default MarcasPage