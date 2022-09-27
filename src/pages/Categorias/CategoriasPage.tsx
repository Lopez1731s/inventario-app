import { lazy, Suspense } from 'react';
import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"
import { RoutesLoading } from "../../components/Loaders";

const ListCategorias = lazy(() => import('./components/ListCategorias'));

const CategoriasPage = () => {
    return (
        <Suspense fallback={<RoutesLoading />}>
            <RoutesNotFound>
                <Route path="/" element={<ListCategorias />} />
            </RoutesNotFound>
        </Suspense>
    )
}
export default CategoriasPage