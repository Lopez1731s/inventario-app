import { lazy, Suspense } from "react";
import { Route } from "react-router-dom"
import { RoutesLoading } from "../../components/Loaders";
import { RoutesNotFound } from "../../utilities"

const ListProveedores = lazy(() => import('./components/ListProveedores'));
const NewProveedor = lazy(() => import('./components/NewProveedor'));
const UpdateProveedor = lazy(() => import('./components/UpdateProveedor'));

const ProveedoresPage = () => {
    return (
        <Suspense fallback={<RoutesLoading />}>
            <RoutesNotFound>
                <Route path="/" element={<ListProveedores />} />
                <Route path="crear" element={<NewProveedor />} />
                <Route path="editar/:id" element={<UpdateProveedor />} />
            </RoutesNotFound>
        </Suspense>
    )
}
export default ProveedoresPage