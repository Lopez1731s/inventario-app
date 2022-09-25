import { FC } from "react";
import { CargoDelete } from "../helpers";

interface DeleteCargoProps {
    id: number;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteCargo: FC<DeleteCargoProps> = ({ id, setShowModal }) => {
    const { handleDeleteCargo } = CargoDelete();

    const onDelete = () => {
        handleDeleteCargo(id).then(() => setShowModal(false));
    };

    return (
        <>
            <input type="checkbox" id="delete-cargo" className="modal-toggle" />
            <label htmlFor="delete-cargo" className="modal cursor-pointer">

                <label className="modal-box relative" htmlFor="">
                    <label htmlFor="delete-cargo" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Eliminar cargo</h3>
                    <p className="mt-4">Estas a punto de eliminar un cargo, ¿Estas seguro?</p>

                    <div className="mt-12 flex justify-end gap-4">
                        <label htmlFor="delete-cargo" className="btn">Cancelar</label>
                        <button
                            className="btn btn-error"
                            onClick={() => onDelete()}
                        >
                            Eliminar
                        </button>
                    </div>
                </label>
            </label>
        </>
    )
}
export default DeleteCargo