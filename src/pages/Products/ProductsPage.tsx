import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"
import { ListProducts, NewProduct } from "./components"
import { ProductoProvider } from "./context"

const ProductsPage = () => {
	return (
		<ProductoProvider>
			<RoutesNotFound>
				<Route path="/" element={<ListProducts />} />
				<Route path="/crear" element={<NewProduct />} />
				<Route path="/editar/:id" element={<>Editar</>} />
				<Route path="detalle/:id" element={<>Detalle</>} />
			</RoutesNotFound>
		</ProductoProvider>
	)
}
export default ProductsPage
