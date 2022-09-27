import { lazy, Suspense } from "react";
import { Route } from "react-router-dom"
import { RoutesLoading } from "../../components/Loaders";
import { RoutesNotFound } from "../../utilities"
import { ProductoProvider } from "./context"

const ListProducts = lazy(() => import('./components/ListProducts'));
const NewProduct = lazy(() => import('./components/NewProduct'));

const ProductsPage = () => {
	return (
		<Suspense fallback={<RoutesLoading />}>
			<ProductoProvider>
				<RoutesNotFound>
					<Route path="/" element={<ListProducts />} />
					<Route path="/crear/*" element={<NewProduct />} />
					<Route path="/editar/:id" element={<>Editar</>} />
					<Route path="detalle/:id" element={<>Detalle</>} />
				</RoutesNotFound>
			</ProductoProvider>
		</Suspense>
	)
}
export default ProductsPage
