import { FC } from "react";
import { CategoriaDelete } from "../helpers";

interface DeleteCategoriaProps {
    id: number;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteCategoria: FC<DeleteCategoriaProps> = ({ id, setShowModal }) => {
    const { handleDeleteCategoria } = CategoriaDelete();

    const onDelete = () => {
        handleDeleteCategoria(id).then(() => setShowModal(false));
    };

    return (
        <>
            <input type="checkbox" id="delete-categoria" className="modal-toggle" />
            <label htmlFor="delete-categoria" className="modal cursor-pointer">

                <label className="modal-box relative" htmlFor="">
                    <label htmlFor="delete-categoria" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Eliminar categoria</h3>
                    <p className="mt-4">Estas a punto de eliminar una categoria, ¿Estas seguro?</p>

                    <div className="mt-12 flex justify-end gap-4">
                        <label htmlFor="delete-categoria" className="btn">Cancelar</label>
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
export default DeleteCategoria