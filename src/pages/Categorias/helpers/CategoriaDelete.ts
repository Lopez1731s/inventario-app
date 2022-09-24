import { useDeleteCategoriaMutation } from "../../../features/categorias/categoriasSlice";
import { toast } from 'react-toastify';

export const CategoriaDelete = () => {
    const [deleteCategoria] = useDeleteCategoriaMutation();

    const handleDeleteCategoria = async (id: number) => {
        deleteCategoria(id)
            .unwrap()
            .then(() =>  toast.success('Categoria eliminada correctamente'))
            .catch(() => toast.error('Error al eliminar la categoria'));
    }

    return { handleDeleteCategoria };
}