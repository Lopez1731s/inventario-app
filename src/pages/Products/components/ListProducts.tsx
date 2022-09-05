import { Link } from "react-router-dom"

const ListProducts = () => {
    return (
        <div>
            <h1>ListProducts</h1>
            <Link to="/productos/crear">Crear producto</Link>
        </div>
    )
}
export default ListProducts