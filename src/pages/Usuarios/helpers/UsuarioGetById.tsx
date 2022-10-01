import { useGetRoleQuery } from "../../../features/roles/rolesSlice";
import { useState } from 'react';

export const UsuarioGetById = () => {
    const [rolData, setRolData] = useState({});

    const getRole = (id: number) => {
        const { data, isLoading } = useGetRoleQuery(id);
        
        if (isLoading) return "Cargando...";

        return (
            data?.role
        )
    }

    return { getRole, rolData }
}