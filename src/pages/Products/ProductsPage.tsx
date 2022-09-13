import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"
import { ListProducts, NewProduct } from "./components"

const ProductsPage = () => {
	return (
		<RoutesNotFound>
			<Route path="/" element={<ListProducts />} />
			<Route path="/crear" element={<NewProduct />} />
			<Route path="/editar/:id" element={<>Editar</>} />
			<Route path="detalle/:id" element={<>Detalle</>} />
		</RoutesNotFound>
	)
}
export default ProductsPage
