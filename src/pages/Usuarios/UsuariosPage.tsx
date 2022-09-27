import { lazy, Suspense } from 'react';
import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"
import { RoutesLoading } from "../../components/Loaders";

const ListUsuarios = lazy(() => import('./components/ListUsuarios'));
const NewUsuario = lazy(() => import('./components/NewUsuario'));
const UpdateUsuario = lazy(() => import('./components/UpdateUsuario'));

const UsuariosPage = () => {
    return (
        <Suspense fallback={<RoutesLoading />}>
            <RoutesNotFound>
                <Route path="/" element={<ListUsuarios />} />
                <Route path="crear" element={<NewUsuario />} />
                <Route path="editar/:id" element={<UpdateUsuario />} />
            </RoutesNotFound>
        </Suspense>
    )
}
export default UsuariosPage