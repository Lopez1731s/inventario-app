import { lazy, Suspense } from "react";
import { Route } from "react-router-dom"
import { RoutesLoading } from "../../components/Loaders";
import { RoutesNotFound } from "../../utilities"

const ListClientes = lazy(() => import('./components/ListClientes'));
const NewCliente = lazy(() => import('./components/NewCliente'));
const UpdateCliente = lazy(() => import('./components/UpdateCliente'));

const ClientesPage = () => {
    return (
        <Suspense fallback={<RoutesLoading />}>
            <RoutesNotFound>
                <Route path="/" element={<ListClientes />} />
                <Route path="/crear" element={<NewCliente />} />
                <Route path="/editar/:id" element={<UpdateCliente />} />
            </RoutesNotFound>
        </Suspense>
    )
}
export default ClientesPage