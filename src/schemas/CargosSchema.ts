import * as yup from 'yup';

export const CargoSchema = yup.object().shape({
    nombre: yup.string().trim().required("El nombre del cargo es requerido").min(3, "El nombre del cargo debe tener al menos 3 caracteres").max(100, "El nombre del cargo debe tener como maximo 100 caracteres"),
});