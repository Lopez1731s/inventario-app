import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ProductoContext } from '../../context';

import { PropiedadesProducto } from '../../../../interfaces';
import { ProductPropertiesSchema } from '../../../../schemas';

import { Button, Input, Notifications } from '../../../../components/ui';

import DeletePropertyButtom from '../ui/DeletePropertyButtom';
import { toast } from 'react-toastify';


const ProductProperties = () => {

    const navigate = useNavigate();

    const { productProperties, handleAddProductProperties, saveProducto } = useContext(ProductoContext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<PropiedadesProducto>({
        resolver: yupResolver(ProductPropertiesSchema)
    });

    const onSubmit: SubmitHandler<PropiedadesProducto> = (data) => { handleAddProductProperties(data); reset() };
    const nextStep = () => productProperties.length > 0 ? navigate("/app/productos/crear/review") : toast.error("Debes agregar al menos una propiedad");

    return (
        <div className="w-full h-full rounded-md shadow-md card bg-base-200">
            <Notifications />
            <div className="card-body">
                <h1 className="text-2xl font-semibold">Propiedades</h1>
                <span className="text-primary-base ">Agrega las propiedades del producto</span>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex justify-between">
                        <div className="w-full mr-3">
                            <Input
                                name="nombre_propiedad"
                                variant="primary"
                                type="text"
                                placeholder="Nombre de la propiedad"
                                register={register}
                                errors={errors}
                            />

                        </div>
                        <div className="w-full mr-3">
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

                    <div className="w-full h-full mt-3 overflow-x-auto">
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

                </form>
                <div className="flex justify-between mt-3">
                    <Link to="/app/productos/crear/step2" className="btn btn-primary">Atras</Link>
                    <button className="btn btn-primary" onClick={nextStep}>Siguiente</button>
                </div>
            </div>
        </div>
    )
}
export default ProductProperties