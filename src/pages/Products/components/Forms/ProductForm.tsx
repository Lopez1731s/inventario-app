import { FC } from 'react';
import { Button, Input, Select, TextArea } from "../../../../components/ui";
import { useGetCategoriasQuery } from '../../../../features/categorias/categoriasSlice';
import { useGetMarcasQuery } from '../../../../features/marcas/marcaSlice';
import { useGetProveedoresQuery } from '../../../../features/proveedores/proveedoresSlice';
import { IMarca, IProveedor, RTKresponse } from '../../../../interfaces';
import { ICategorias } from '../../../../interfaces/Categorias';

interface IProductForm {
    register: any;
    errors: any;
}

type proveedorResponse = {
    data: IProveedor[];
}

type categoriaResponse = {
    data: ICategorias[];
}

type marcaResponse = {
    data: IMarca[];
}

interface Proveedor extends RTKresponse {
    data: proveedorResponse;
}

interface Categoria extends RTKresponse {
    data: categoriaResponse;
}

interface Marca extends RTKresponse {
    data: marcaResponse;
}

const ProductForm: FC<IProductForm> = ({ register, errors }) => {
    console.log(errors);

    const { data: Proveedores } = useGetProveedoresQuery<Proveedor>(undefined);
    const { data: Categorias } = useGetCategoriasQuery<Categoria>(undefined);
    const { data: Marcas } = useGetMarcasQuery<Marca>(undefined);

    return (
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
                            rows={8}
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

                    <div className="grid grid-cols-3 gap-4 mb-3">
                        <div className="form-control w-full">
                            <select
                                className={errors.proveedor ? "select select-bordered select-error" : "select select-bordered"}
                                {...register("proveedor")}
                            >
                                <option hidden>Seleccione un proveedor</option>
                                {
                                    Proveedores?.data.map((proveedor: IProveedor) => (
                                        <option key={proveedor.id} value={proveedor.id}>{proveedor.primerNombre}</option>
                                    ))
                                }
                            </select>

                            <label className="label">
                                {errors.proveedor && <span className="label-text-alt text-error">{errors.proveedor.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full">
                            <select
                                className={errors.proveedor ? "select select-bordered select-error" : "select select-bordered"}
                                {...register("categoria")}
                            >
                                <option hidden value="">Seleccione una categoría</option>
                                {
                                    Categorias?.data.map((categoria: ICategorias) => (
                                        <option key={categoria.id} value={categoria.nombre}>{categoria.nombre}</option>
                                    ))
                                }
                            </select>

                            <label className="label">
                                {errors.categoria && <span className="label-text-alt text-error">{errors.categoria.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full">
                            <select
                                className={errors.proveedor ? "select select-bordered select-error" : "select select-bordered"}
                                {...register("marca")}
                            >
                                <option hidden value="">Seleccione una marca</option>
                                {
                                    Marcas?.data.map((marca: IMarca) => (
                                        <option key={marca.id} value={marca.nombre}>{marca.nombre}</option>
                                    ))
                                }
                            </select>

                            <label className="label">
                                {errors.marca && <span className="label-text-alt text-error">{errors.marca.message}</span>}
                            </label>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button name="Guardar" variant="primary" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductForm