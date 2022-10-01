import { LinkButton, LinkButtonActions } from "../../../components/ui";
import { useGetRoleQuery } from "../../../features/roles/rolesSlice";
import { useGetUsuariosQuery } from "../../../features/usuarios/usuariosSlice";
import { IUsuario } from "../../../interfaces";
import { UsuarioGetById } from "../helpers";
import { Filters } from "./Filters";

const ListUsuarios = () => {
    const { data: usuarios, isLoading, isError } = useGetUsuariosQuery(undefined);
    
  

    return (
        <div className="card w-full bg-base-200 shadow-md rounded-md">
            <div className="card-body">
                <div className="flex justify-between mb-3">
                    <h2 className="card-title">Usuarios</h2>

                    <div>
                        <LinkButton name="Exportar" action={LinkButtonActions.Export} link="/" variant="ghost" />
                        <LinkButton name="Agregar" action={LinkButtonActions.Add} link="crear" variant="ghost" />
                    </div>
                </div>

                <Filters />

                <div className="overflow-x-auto w-full h-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="bg-primary text-secondary">ID</th>
                                <th className="bg-primary text-secondary">Correo</th>
                                <th className="bg-primary text-secondary">PersonaId</th>
                                <th className="bg-primary text-secondary">Rol</th>
                                <th className="bg-primary text-secondary">Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                usuarios?.length > 0 ?
                                    usuarios.map((usuario: IUsuario) => (
                                        <tr key={usuario.id}>
                                            <td>{usuario.id}</td>
                                            <td>{usuario.correo}</td>
                                            <td>{usuario.personaId}</td>
                                            <td></td>
                                        </tr>
                                    )) : <tr><td colSpan={5} className="text-center">No hay usuarios registrados</td></tr>
                            }
                        </tbody>
                    </table>
                </div>

                {/* <Pagination /> */}
            </div>
        </div>
    )
}
export default ListUsuarios