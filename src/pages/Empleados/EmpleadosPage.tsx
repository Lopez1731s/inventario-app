import { lazy, Suspense } from 'react';
import { Route } from "react-router-dom"
import { RoutesLoading } from '../../components/Loaders';
import { RoutesNotFound } from "../../utilities"
const ListEmpleados = lazy(() => import('./components/ListEmpleados'));

const EmpleadosPage = () => {
    return (
        <Suspense fallback={<RoutesLoading />}>
            <RoutesNotFound>
                <Route path="/" element={<ListEmpleados />} />
                <Route path="crear" element={<h1>Crear</h1>} />
                <Route path="editar/:id" element={<h1>Editar</h1>} />
            </RoutesNotFound>
        </Suspense>
    )
}
export default EmpleadosPage