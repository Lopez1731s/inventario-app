import { useContext } from 'react';
import { ProductoContext } from "../context";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { IProductoCreate } from "../../../interfaces";
import { ProductSchema } from "../../../schemas";

import { ProductForm } from "./Forms";

const AddInfoProducto = () => {
    const { handleAddProducto } = useContext(ProductoContext);
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<IProductoCreate>({
        resolver: yupResolver(ProductSchema)
    })

    const onSubmit: SubmitHandler<IProductoCreate> = (data) => {
        handleAddProducto(data);
        navigate("/app/productos/crear/step2");
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ProductForm register={register} errors={errors} />
        </form>
    )
}
export default AddInfoProducto