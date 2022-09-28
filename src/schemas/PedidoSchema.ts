import * as yup from 'yup';

export const PedidoSchema = yup.object().shape({
    proveedorId: yup.number().required("El proveedor es requerido").typeError("El proveedor es requerido"),
    productoId: yup.number().required("El producto es requerido").typeError("El producto es requerido"),
    cantidad : yup.number().integer("La cantidad debe ser un número entero").required("La cantidad es requerida").typeError("La cantidad es requerida"),
    precio : yup.number().required("El precio es requerido").typeError("El precio es requerido"),
    fechaEntrega : yup.date().required("La fecha de entrega es requerida").typeError("La fecha de entrega es requerida"),
});