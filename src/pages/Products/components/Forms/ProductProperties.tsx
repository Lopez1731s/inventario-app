import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Input } from '../../../../components/ui';
import { PropiedadesProducto } from '../../../../interfaces';
import { ProductPropertiesSchema } from '../../../../schemas';
import { useContext } from 'react';
import { ProductoContext } from '../../context';
import DeletePropertyButtom from '../ui/DeletePropertyButtom';


const ProductProperties = () => {

    const { productProperties, handleAddProductProperties } = useContext(ProductoContext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<PropiedadesProducto>({
        resolver: yupResolver(ProductPropertiesSchema)
    });

    const onSubmit: SubmitHandler<PropiedadesProducto> = (data) => { handleAddProductProperties(data); reset() };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card w-full bg-base-200 shadow-md rounded-md mt-9 mb-9">
                <div className="card-body">
                    <h1 className="text-2xl font-semibold">Propiedades</h1>
                    <span className="text-primary-base ">Agrega las propiedades del producto</span>

                    <div className="flex justify-between">
                        <div className="mr-3 w-full">
                            <Input
                                name="nombre_propiedad"
                                variant="primary"
                                type="text"
                                placeholder="Nombre de la propiedad"
                                register={register}
                                errors={errors}
                            />

                        </div>
                        <div className="mr-3 w-full">
                            <Input
                                name="valor_propiedad"
                                variant="primary"
                                type="text"
                                placeholder="Valor de la propiedad"
                                register={register}
                                errors={errors}
                            />
                        </div>

                        <Button variant="primary" name="Agregar" />
                    </div>

                    <div className="overflow-x-auto w-full h-full mt-3">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th className="bg-primary text-secondary">Nombre</th>
                                    <th className="bg-primary text-secondary">Valor</th>
                                    <th className="bg-primary text-secondary">Eliminar</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    productProperties.length > 0 ? productProperties.map((property, index) => (
                                        <tr key={index}>
                                            <td>{property.nombre_propiedad}</td>
                                            <td>{property.valor_propiedad}</td>
                                            <td>
                                                <DeletePropertyButtom
                                                    index={index}
                                                />
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan={3} className="text-center">
                                                Tus propiedades apareceran aqui.
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default ProductProperties