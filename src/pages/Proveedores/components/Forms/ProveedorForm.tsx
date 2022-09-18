import { FC } from "react";
import { Button, Input } from "../../../../components/ui"

interface IProveedorForm {
    register: any;
    errors: any;
}

const ProveedorForm: FC<IProveedorForm> = ({ register, errors }) => {
    return (
        <>
            <div className="card w-full bg-base-200 shadow-md rounded-md mb-12">
                <div className="card-body">
                    <h1 className="text-2xl font-semibold">Información del Proveedor</h1>
                    <span className="text-primary-base">Datos personales del proveedor</span>

                    <div className="mt-8">
                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                name="primerNombre"
                                variant="primary"
                                type="text"
                                placeholder="Primer nombre"
                                register={register}
                                errors={errors}
                            />

                            <Input
                                name="segundoNombre"
                                variant="primary"
                                type="text"
                                placeholder="Segundo nombre"
                                register={register}
                                errors={errors}
                            />

                            <Input
                                name="primerApellido"
                                variant="primary"
                                type="text"
                                placeholder="Primer apellido"
                                register={register}
                                errors={errors}
                            />

                            <Input
                                name="segundoApellido"
                                variant="primary"
                                type="text"
                                placeholder="Segundo apellido"
                                register={register}
                                errors={errors}
                            />
                        </div>
                    </div>

                </div>
            </div>

            <div className="card w-full bg-base-200 shadow-md rounded-md">
                <div className="card-body">
                    <h1 className="text-2xl font-semibold">Información de contacto</h1>
                    <span className="text-primary-base">Datos de contacto del proveedor</span>

                    <div className="mt-8">
                        <div className="grid grid-cols-2 gap-4">
                            <Input
                                name="telefono"
                                variant="primary"
                                type="text"
                                placeholder="Teléfono"
                                register={register}
                                errors={errors}
                            />

                            <Input
                                name="correo"
                                variant="primary"
                                type="email"
                                placeholder="Correo"
                                register={register}
                                errors={errors}
                            />

                            <Input
                                name="empresa"
                                variant="primary"
                                type="text"
                                placeholder="Empresa"
                                register={register}
                                errors={errors}
                            />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button name="Guardar" variant="primary" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProveedorForm