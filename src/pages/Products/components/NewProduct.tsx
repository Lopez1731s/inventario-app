import { useForm, SubmitHandler } from "react-hook-form";
import { IProductoCreate } from "../../../interfaces";
import { yupResolver } from '@hookform/resolvers/yup';
import { ProductSchema } from "../../../schemas";
import ProductForm from "./ProductForm";

const NewProduct = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IProductoCreate>({
        resolver: yupResolver(ProductSchema)
    });
    console.log(errors);

    const onSubmit: SubmitHandler<IProductoCreate> = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ProductForm register={register} errors={errors} />
        </form>
    )
}
export default NewProduct