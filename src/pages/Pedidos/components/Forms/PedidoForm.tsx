import { FC } from "react";
import { DatePicker, Input } from "../../../../components/ui";
import { useGetProductsQuery } from "../../../../features/products/productSlice";
import { useGetProveedoresQuery } from "../../../../features/proveedores/proveedoresSlice";
import { IProducts, IProveedor } from "../../../../interfaces";

import { RoutesLoading } from "../../../../components/Loaders";

interface PedidoFormProps {
    register: any;
    errors: any;
}

const PedidoForm: FC<PedidoFormProps> = ({ register, errors }) => {
    const { data: Proveedores, isLoading } = useGetProveedoresQuery({ page: 1, limit: 1000 });
    const { data: Productos } = useGetProductsQuery({ page: 1, limit: 1000 });

    if (isLoading) return <RoutesLoading />;

    return (
        <div className="mt-8">
            <div className="grid grid-cols-2 gap-4">
                <div className="form-control w-full">
                    <select
                        className={errors.proveedorId ? "select select-bordered select-error" : "select select-bordered"}
                        {...register("proveedorId")}
                    >
                        <option hidden>Seleccione un proveedor</option>
                        {
                            Proveedores?.data.map((proveedor: IProveedor) => (
                                <option key={proveedor.id} value={proveedor.id}>{proveedor.empresa}</option>
                            ))
                        }
                    </select>

                    <label className="label">
                        {errors.proveedorId && <span className="label-text-alt text-error">{errors.proveedorId.message}</span>}
                    </label>
                </div>

                <DatePicker
                    name="fechaEntrega"
                    variant="primary"
                    type="date"
                    placeholder="Fecha de entrega"
                    minDate={new Date().toISOString().split('T')[0]}
                    register={register}
                    errors={errors}
                />
            </div>

            <div className="mt-8">
                <h1 className="text-lg font-semibold">Detalles</h1>
                <span className="text-primary-base ">Agrega los detalles del pedido</span>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">

                <div className="form-control w-full">
                    <select
                        className={errors.productoId ? "select select-bordered select-error" : "select select-bordered"}
                        {...register("productoId")}
                    >
                        <option hidden>Seleccione un producto</option>
                        {
                            Productos?.data.map((producto: IProducts) => (
                                <option key={producto.id} value={producto.id}>{producto.nombre}</option>
                            ))
                        }
                    </select>

                    <label className="label">
                        {errors.productoId && <span className="label-text-alt text-error">{errors.productoId.message}</span>}
                    </label>
                </div>

                <Input
                    name="cantidad"
                    variant="primary"
                    type="text"
                    placeholder="Cantidad"
                    register={register}
                    errors={errors}
                />

                <Input
                    name="precio"
                    variant="primary"
                    type="text"
                    placeholder="Precio"
                    register={register}
                    errors={errors}
                />
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
        </div>
    )
}
export default PedidoForm