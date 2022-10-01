import { toast } from "react-toastify";
import { useCreateCargoMutation } from "../../../features/cargos/cargosSlice";
import { ICargosCreate } from '../../../interfaces/Cargos';

interface Props {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CargoCreate = ({ setShowModal }: Props) => {
    const [createCargo] = useCreateCargoMutation();

    const handleCreateCargo = (data: ICargosCreate) => {
        createCargo(data)
            .unwrap()
            .then(() => {
                toast.success("Cargo creado correctamente");
                setShowModal(false);
            })
            .catch(() => {
                toast.error("Error al crear cargo");
            });
    }

    return { handleCreateCargo };
}