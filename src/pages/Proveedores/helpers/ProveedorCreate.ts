import { toast } from "react-toastify";
import { useCreateProveedorMutation } from "../../../features/proveedores/proveedoresSlice";
import { IProveedorCreate } from "../../../interfaces";

export const ProveedorCreate = () => {
    const [createProveedor] = useCreateProveedorMutation();

    const handleAddProveedor = (data: IProveedorCreate) => {
        createProveedor(data)
            .unwrap()
            .then(() => { toast.success('Proveedor creado correctamente'); })
            .catch(() => toast.error("Error al crear proveedor"));
    };

    return { handleAddProveedor };
}