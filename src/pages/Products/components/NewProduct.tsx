import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Input, Select, TextArea } from "../../../components/ui"
import { IProductoCreate } from "../../../interfaces";
import { yupResolver } from '@hookform/resolvers/yup';
import { ProductSchema } from "../../../schemas";

const NewProduct = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<IProductoCreate>({
        resolver: yupResolver(ProductSchema)
    });
    console.log(errors);

    const onSubmit: SubmitHandler<IProductoCreate> = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card w-full bg-base-200 shadow-md rounded-md">
                <div className="card-body">
                    <h1 className="text-2xl font-semibold">Información general</h1>
                    <span className="text-primary-base">Agrega la información general del producto</span>

                    <div className="mt-8">
                        <h1 className="text-lg font-semibold">Detalles</h1>
                        <span className="text-primary-base ">Agrega los detalles del producto</span>
                    </div>

                    <div className="mt-8">

                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                name="nombre"
                                variant="primary"
                                type="text"
                                placeholder="Nombre"
                                register={register}
                                errors={errors}
                            />

                            <Input
                                name="sku"
                                variant="primary"
                                type="text"
                                placeholder="SKU"
                                help="Elemento único para llevar el control y gestionar el stock en el almacén."
                                register={register}
                                errors={errors}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <TextArea
                                name="descripcion"
                                variant="primary"
                                rows={6}
                                placeholder="Descripción"
                                register={register}
                                errors={errors}
                            />

                            <div>
                                <Input
                                    name="precioTienda"
                                    variant="primary"
                                    type="text"
                                    placeholder="Precio tienda"
                                    register={register}
                                    errors={errors}
                                />

                                <Input
                                    name="precioVenta"
                                    variant="primary"
                                    type="text"
                                    placeholder="Precio de venta"
                                    register={register}
                                    errors={errors}
                                />

                                <Input
                                    name="slug"
                                    variant="primary"
                                    type="text"
                                    placeholder="Slug"
                                    help="El slug es la url amigable del producto"
                                    register={register}
                                    errors={errors}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <Select name="proveedor" variant="primary" defaultOption="Seleccione un Proveedor" data={[]} register={register} errors={errors} />
                            <Select name="categoria" variant="primary" defaultOption="Seleccione una categoria" data={[]} register={register} errors={errors} />
                            <Select name="marca" variant="primary" defaultOption="Seleccione una marca" data={[]} register={register} errors={errors} />
                        </div>

                        <Button name="Guardar" variant="base-100" />
                    </div>
                </div>
            </div>

            <div className="card w-full bg-base-200 shadow-md rounded-md mt-9 mb-9">
                <div className="card-body">
                    <h1 className="text-2xl font-semibold">Imagenes</h1>
                    <span className="text-primary-base ">Agrega un maximo de 5 imagenes</span>
                </div>
            </div>
        </form>
    )
}
export default NewProduct