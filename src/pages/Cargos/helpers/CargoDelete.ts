import { useDeleteCargoMutation } from "../../../features/cargos/cargosSlice";
import { toast } from 'react-toastify';

export const CargoDelete = () => {
    const [deleteCargo] = useDeleteCargoMutation();

    const handleDeleteCargo = async (id: number) => {
        deleteCargo(id)
            .unwrap()
            .then(() => toast.success("Eliminado correctamente"))
            .catch(() => toast.error("Error al eliminar cargo"));
    }

    return { handleDeleteCargo };
}