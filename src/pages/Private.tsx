import { lazy } from "react"
import { Route } from "react-router-dom"
import Sidebar from "../components/SideBar/Sidebar"
import { PrivateRoutes } from "../interfaces"
import { RoutesNotFound } from "../utilities"

const DashboardPage = lazy(() => import("./Dashboard/DashboardPage"));
const EmpleadosPage = lazy(() => import("./Empleados/EmpleadosPage"));
const CargosPage = lazy(() => import("./Cargos/CargosPage"));
const UsuariosPage = lazy(() => import("./Usuarios/UsuariosPage"));
const ClientesPage = lazy(() => import("./Clientes/ClientesPage"));
const ProveedoresPage = lazy(() => import("./Proveedores/ProveedoresPage"));
const ProductsPage = lazy(() => import("./Products/ProductsPage"));
const CategoriasPage = lazy(() => import("./Categorias/CategoriasPage"));
const MarcasPage = lazy(() => import("./Marcas/MarcasPage"));
const PedidosPage = lazy(() => import("./Pedidos/PedidosPage"));

const Private = () => {
    return (
        <RoutesNotFound>
            <Route element={<Sidebar />}>
                <Route path={`${PrivateRoutes.DASHBOARD}/*`} element={<DashboardPage />} />
                <Route path={`${PrivateRoutes.EMPLEADOS}`} element={<EmpleadosPage />} />
                <Route path={`${PrivateRoutes.CARGOS}`} element={<CargosPage />} />
                <Route path={`${PrivateRoutes.USUARIOS}`} element={<UsuariosPage />} />
                <Route path={`${PrivateRoutes.CLIENTES}`} element={<ClientesPage />} />
                <Route path={`${PrivateRoutes.PROVEEDORES}`} element={<ProveedoresPage />} />
                <Route path={`${PrivateRoutes.PRODUCTOS}/*`} element={<ProductsPage />} />
                <Route path={`${PrivateRoutes.CATEGORIAS}`} element={<CategoriasPage />} />
                <Route path={`${PrivateRoutes.MARCAS}`} element={<MarcasPage />} />
                <Route path={`${PrivateRoutes.PEDIDOS}`} element={<PedidosPage />} />
            </Route>
        </RoutesNotFound>
    )
}
export default Private