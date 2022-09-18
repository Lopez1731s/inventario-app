import * as yup from 'yup';

export const ProveedorSchema = yup.object().shape({
    primerNombre: yup.string().trim().required("El primer nombre del proveedor es requerido").min(3, "El primer nombre del proveedor debe tener al menos 3 caracteres").max(100, "El primer nombre del proveedor debe tener como maximo 100 caracteres"),
    segundoNombre: yup.string().trim(),
    primerApellido: yup.string().trim().required("El primer apellido del proveedor es requerido").min(3, "El primer apellido del proveedor debe tener al menos 3 caracteres").max(100, "El primer apellido del proveedor debe tener como maximo 100 caracteres"),
    segundoApellido: yup.string().trim(),
    empresa: yup.string().trim().required("El nombre de la empresa del proveedor es requerido").min(3, "El nombre de la empresa del proveedor debe tener al menos 3 caracteres").max(100, "El nombre de la empresa del proveedor debe tener como maximo 100 caracteres"),
    telefono: yup.string().nullable().matches(/^\d{8}$/, { excludeEmptyString: true, message: 'El teléfono debe tener 8 dígitos' }),
    correo: yup.string().trim().email("El formato del correo del proveedor es invalido").required("El correo del proveedor es requerido").min(3, "El correo del proveedor debe tener al menos 3 caracteres").max(100, "El correo del proveedor debe tener como maximo 100 caracteres"),
});