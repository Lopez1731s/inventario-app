import { lazy, Suspense } from "react"
import { Route } from "react-router-dom"
import { RoutesLoading } from "../../components/Loaders"
import { RoutesNotFound } from "../../utilities"

const ListPedido = lazy(() => import("./components/ListPedido"))
const NewPedido = lazy(() => import("./components/NewPedido"))
const UpdatePedido = lazy(() => import("./components/UpdatePedido"))

const PedidosPage = () => {
    return (
        <Suspense fallback={<RoutesLoading />}>
            <RoutesNotFound>
                <Route path="/" element={<ListPedido />} />
                <Route path="crear" element={<NewPedido />} />
                <Route path="editar/:id" element={<UpdatePedido />} />
            </RoutesNotFound>
        </Suspense>
    )
}
export default PedidosPage