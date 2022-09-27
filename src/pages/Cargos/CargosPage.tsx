import { lazy, Suspense } from 'react';
import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"
import { RoutesLoading } from "../../components/Loaders";

const ListCargos = lazy(() => import('./components/ListCargos'));

const CargosPage = () => {
    return (
        <Suspense fallback={<RoutesLoading />}>
            <RoutesNotFound>
                <Route path="/" element={<ListCargos />} />
            </RoutesNotFound>
        </Suspense>
    )
}
export default CargosPage