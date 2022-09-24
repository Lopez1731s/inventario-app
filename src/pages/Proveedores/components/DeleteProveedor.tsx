import { FC } from "react";
import { ProveedorDelete } from "../helpers";

interface DeleteProveedorProps {
    id: number;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}


const DeleteProveedor: FC<DeleteProveedorProps> = ({ id, setShowModal }) => {
    const { handleDeleteProveedor } = ProveedorDelete();

    const onDelete = () => handleDeleteProveedor(id).then(() => setShowModal(false));

    return (
        <>
            <input type="checkbox" id="delete-proveedor" className="modal-toggle" />
            <label htmlFor="delete-proveedor" className="modal cursor-pointer">

                <label className="modal-box relative" htmlFor="">
                    <label htmlFor="delete-proveedor" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Eliminar proveedor</h3>
                    <p className="mt-4">Estas a punto de eliminar un proveedor, ¿Estas seguro?</p>

                    <div className="mt-12 flex justify-end gap-4">
                        <label htmlFor="delete-proveedor" className="btn">Cancelar</label>
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
export default DeleteProveedor