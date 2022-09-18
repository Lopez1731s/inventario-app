import * as yup from 'yup';

export const ProductSchema = yup.object().shape({
    nombre: yup.string().trim().required("El nombre del producto es requerido").min(3, "El nombre del producto debe tener al menos 3 caracteres"),
    sku: yup.string().trim().required("El SKU del producto es requerido").min(3, "El SKU del producto debe tener al menos 3 caracteres"),
    descripcion: yup.string().trim().required("La descripcion del producto es requerdia").min(3, "La descripcion del producto debe tener al menos 3 caracteres"),
    precioTienda: yup.number().typeError("Precio invalido").positive("El precio de la tienda del producto debe ser un numero positivo").required("El precio de la tienda del producto es requerido"),
    precioVenta: yup.number().typeError("Precio invalido").positive("El precio de venta del producto debe ser un numero positivo").required("El precio de venta del producto es requerido"),
    slug: yup.string().trim().required("El slug del producto es requerido").min(3, "El slug del producto debe tener al menos 3 caracteres"),
    proveedor: yup.number().typeError("Proveedor invalido").integer("El proveedor del producto debe ser un numero entero").positive("El proveedor del producto debe ser un numero positivo").required("El proveedor del producto es requerido"),
    categoria: yup.string().trim().required("La categoria del producto es requerdia").min(3, "La categoria del producto debe tener al menos 3 caracteres"),
    marca: yup.string().trim().required("La marca del producto es requerdia").min(3, "La marca del producto debe tener al menos 3 caracteres"),
});

export const ProductPropertiesSchema = yup.object().shape({
    nombre_propiedad: yup.string().trim().required("El nombre de la propiedad es requerido"),
    valor_propiedad: yup.string().trim().required("El valor de la propiedad es requerido"),
});