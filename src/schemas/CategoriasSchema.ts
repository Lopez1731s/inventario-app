import * as yup from 'yup';

export const CategoriaSchema = yup.object().shape({
    nombre: yup.string().trim().required("El nombre de la categoria es requerido").min(3, "El nombre de la categoria debe tener al menos 3 caracteres").max(100, "El nombre de la categoria debe tener como maximo 100 caracteres"),
});