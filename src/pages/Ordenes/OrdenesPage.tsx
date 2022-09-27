import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"
import { lazy, Suspense } from 'react';
import { RoutesLoading } from "../../components/Loaders";

const ListOrdenes = lazy(() => import('./components/ListOrdenes'));
const NewOrden = lazy(() => import('./components/NewOrden'));

const OrdenesPage = () => {
    return (
        <Suspense fallback={<RoutesLoading />}>
            <RoutesNotFound>
                <Route path="/" element={<ListOrdenes />} />
                <Route path="crear" element={<NewOrden />} />
            </RoutesNotFound>
        </Suspense>
    )
}
export default OrdenesPage