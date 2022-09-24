import { useDeleteProveedorMutation } from "../../../features/proveedores/proveedoresSlice"
import { toast } from 'react-toastify';

export const ProveedorDelete = () => {
    const [deleteProveedor] = useDeleteProveedorMutation();

    const handleDeleteProveedor = async (id: number) => {
        deleteProveedor(id)
            .unwrap()
            .then(() => toast.success('Proveedor eliminado correctamente'))
            .catch(() => toast.error('Error al eliminar el proveedor'));
    }

    return { handleDeleteProveedor };
}