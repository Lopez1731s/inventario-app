import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "../../../../components/ui";
import { ProveedorSchemaFilters } from "../../../../schemas";
import { IProveedorFilters } from "../../interfaces";

const Filters = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<IProveedorFilters>({
        resolver: yupResolver(ProveedorSchemaFilters)
    });
    const [filters, setFilters] = useState<IProveedorFilters>()



    const onSubmit: SubmitHandler<IProveedorFilters> = (data) => {
        setFilters(data);
    }

    return (
        <div className="flex justify-between mb-3">
            <div className="flex">
                <div className="dropdown flex">
                    <Button name="Filtros" variant="ghost" size="xs" />
                    <button className="btn btn-ghost btn-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </button>

                    <div tabIndex={0} className="dropdown-content card card-compact w-72 p-2 mt-8 shadow bg-primary rounded-md">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex justify-between">
                                    <div className="w-32">
                                        <Button name="Limpiar" variant="secondary" size="sm" />
                                    </div>
                                    <div className="w-full ml-3">
                                        <Button name="Buscar" variant="secondary" size="sm" width="w-full" />
                                    </div>
                                </div>
                                <div className="mt-12">
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

                                    <Input
                                        name="empresa"
                                        variant="primary"
                                        type="text"
                                        placeholder="Empresa"
                                        register={register}
                                        errors={errors}
                                    />

                                    <Input
                                        name="telefono"
                                        variant="primary"
                                        type="text"
                                        placeholder="Telefono"
                                        register={register}
                                        errors={errors}
                                    />

                                    <Input
                                        name="correo"
                                        variant="primary"
                                        type="text"
                                        placeholder="Correo"
                                        register={register}
                                        errors={errors}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Filters