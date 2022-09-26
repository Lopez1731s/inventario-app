import * as yup from 'yup';

export const MarcaSchema = yup.object().shape({
    nombre: yup.string().trim().required("El nombre de la marca es requerido").min(3, "El nombre de la marca debe tener al menos 3 caracteres"),
    imagen: yup.mixed()
        .test("fileSize", "El formato de la imagen no es correcto", value => {
            return value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png' || value[0]?.type === 'image/jpg' ? true : false;
        })
});