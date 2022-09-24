import { useDeleteCargoMutation } from "../../../features/cargos/cargosSlice";
import { toast } from 'react-toastify';

export const DeleteCargo = () => {
    const [deleteCargo] = useDeleteCargoMutation();

    const handleDeleteCargo = (id: number) => {
        deleteCargo(id)
            .unwrap()
            .then(() => {
                toast.success("Eliminado correctamente");
            })
            .catch(() => {
                toast.error("Error al eliminar cargo");
            });
    }

    return { handleDeleteCargo };
}