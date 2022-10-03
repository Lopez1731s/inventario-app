import { useContext } from 'react';
import { Notifications } from '../../../../components/ui';
import { ProductoContext } from "../../context";

const ProductReview = () => {
    const { producto, imageArray, productProperties, saveProducto } = useContext(ProductoContext);

    return (
        <div className="w-full space-y-6 flex-inline">
            <div className="w-full rounded-md shadow-md card bg-base-200">
                <div className="card-body">
                    <div className="flex justify-between">
                        <div className="w-1/2">
                            <h1 className="text-2xl font-semibold">Revisión de producto</h1>
                            <span className="text-primary-base">Revisa la información del producto</span>

                            <div className="mt-8">
                                <h1 className="text-lg font-semibold">Detalles del producto</h1>
                                <span className="text-primary-base ">Revisa los detalles del producto</span>
                            </div>
                        </div>

                        <div className="flex flex-col w-1/2 space-y-2">
                            <div className="m-auto stack">
                                {
                                    imageArray.map((image, index) => (
                                        <img key={index} src={image.image_url} alt="Image 1" className="object-contain h-48 rounded" />
                                    ))
                                }
                            </div>
                            <h1 className="text-xl font-semibold text-center">Imagenes</h1>
                        </div>
                    </div>

                    <div className="mt-8 space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="text-lg font-semibold">Nombre</span> <br />
                                <span className="text-primary-base">{producto.nombre}</span>
                            </div>

                            <div>
                                <span className="text-lg font-semibold">SKU</span> <br />
                                <span className="text-primary-base">{producto.sku}</span>
                            </div>

                        </div>

                        <div className="grid grid-cols-2 gap-4 ">
                            <div>
                                <span className="overflow-scroll text-lg font-semibold">Descripción</span> <br />
                                <span className="text-primary-base">{producto.descripcion}</span>
                            </div>

                            <div className="flex flex-col w-full space-y-2">
                                <span className="text-lg font-semibold">Cantidad</span>
                                <span className="text-primary-base">{producto.cantidad}</span>

                                <span className="text-lg font-semibold">Precio tienda</span>
                                <span className="text-primary-base">{producto.precioTienda}</span>

                                <span className="text-lg font-semibold">Precio mayorista</span>
                                <span className="text-primary-base">{producto.precioVenta}</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-3">
                            <div>
                                <span className="text-lg font-semibold">Categoría</span> <br />
                                <span className="text-primary-base">{producto.categoria}</span>
                            </div>

                            <div>
                                <span className="text-lg font-semibold">Proveedor</span> <br />
                                <span className="text-primary-base">{producto.proveedor}</span>
                            </div>

                            <div>
                                <span className="text-lg font-semibold">Marca</span> <br />
                                <span className="text-primary-base">{producto.marca}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full rounded-md shadow-md card bg-base-200">
                <div className="card-body">
                    <h1 className="text-2xl font-semibold">Propiedades de1 producto</h1>
                    <span className="text-primary-base">Revisa las propiedades del producto</span>

                    <div className="w-1/2">
                        <div className="flex">
                            <div className="w-full">
                                <span className="text-lg font-semibold">Propiedad</span>
                            </div>
                            <div className="w-2/3">
                                <span className="text-lg font-semibold">Valor</span>
                            </div>
                        </div>

                        <div className="mt-0 mb-0 divider"></div>

                        {
                            productProperties.map((property, index) => (
                                <div className="flex space-y-3" key={index}>
                                    <div className="w-full">
                                        <span className="text-primary-base">{property.nombre_propiedad}</span>
                                    </div>
                                    <div className="w-2/3">
                                        <span className="text-primary-base">{property.valor_propiedad}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="flex justify-end">
                        <button
                            className="btn btn-primary"
                            onClick={() => saveProducto()}
                        >
                            Guardar
                        </button>
                    </div>
                </div>
            </div>

            <Notifications />
        </div>
    )
}
export default ProductReview