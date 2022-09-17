import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from "react-hook-form";
import { IProductoCreate } from "../../../interfaces";
import { ProductSchema } from "../../../schemas";
import { ProductForm, ProductImages, ProductProperties } from './Forms';


const NewProduct = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IProductoCreate>({
        resolver: yupResolver(ProductSchema)
    });

    const onSubmit: SubmitHandler<IProductoCreate> = (data) => console.log(data);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ProductForm register={register} errors={errors} />
            </form>

            <ProductImages />

            <ProductProperties />
        </>
    )
}
export default NewProduct