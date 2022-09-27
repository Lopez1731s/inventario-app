import { lazy, Suspense } from "react";
import { Route } from "react-router-dom"
import { RoutesLoading } from "../../components/Loaders";
import { RoutesNotFound } from "../../utilities"

const ListMarcas = lazy(() => import('./components/ListMarcas'));
const NewMarca = lazy(() => import('./components/NewMarca'));
const UpdateMarca = lazy(() => import('./components/UpdateMarca'));

const MarcasPage = () => {
    return (
        <Suspense fallback={<RoutesLoading />}>
            <RoutesNotFound>
                <Route path="/" element={<ListMarcas />} />
                <Route path="crear" element={<NewMarca />} />
                <Route path="editar/:id" element={<UpdateMarca />} />
            </RoutesNotFound>
        </Suspense>
    )
}
export default MarcasPage