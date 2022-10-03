import { useContext, useEffect } from 'react';
import { ProductoContext } from "../context";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { IProductoCreate } from "../../../interfaces";
import { ProductSchema } from "../../../schemas";

import { ProductForm } from "./Forms";

const AddInfoProducto = () => {
    const { handleAddProducto, producto } = useContext(ProductoContext);
    const navigate = useNavigate();

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<IProductoCreate>({
        resolver: yupResolver(ProductSchema),
        defaultValues: {
            nombre: producto?.nombre,
            sku: producto?.sku,
            descripcion: producto?.descripcion,
            cantidad: producto?.cantidad,
            precioTienda: producto?.precioTienda,
            precioVenta: producto?.precioVenta,
            slug: producto?.slug,
            proveedor: producto?.proveedor,
            categoria: producto?.categoria,
            marca: producto?.marca,
        }
    })

    const onSubmit: SubmitHandler<IProductoCreate> = (data) => {
        handleAddProducto(data);
        navigate("/app/productos/crear/step2");
    }

    useEffect(() => {
        if (producto) {
            setValue("nombre", producto.nombre);
            setValue("sku", producto.sku);
            setValue("descripcion", producto.descripcion);
            setValue("cantidad", producto.cantidad);
            setValue("precioTienda", producto.precioTienda);
            setValue("precioVenta", producto.precioVenta);
            setValue("slug", producto.slug);
            setValue("proveedor", producto.proveedor);
            setValue("categoria", producto.categoria);
            setValue("marca", producto.marca);
        }
    }, [producto])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ProductForm register={register} errors={errors} />
        </form>
    )
}
export default AddInfoProducto