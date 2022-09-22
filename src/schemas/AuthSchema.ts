import * as yup from 'yup';

export const AuthSchema = yup.object().shape({
    correo: yup.string().trim().required("El correo es requerido").email("El correo debe ser un correo valido"),
    contrasenia: yup.string().trim().required("La contraseña es requerida"),
});