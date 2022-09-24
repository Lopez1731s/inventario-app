export interface IProveedor {
    id: number;
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    empresa: string;
    telefono: number;
    correo: string;
}

export interface IProveedorCreate {
    primerNombre: string;
    segundoNombre: string;
    primerApellido: string;
    segundoApellido: string;
    empresa: string;
    telefono: string;
    correo: string;
}

export interface IProveedorUpdate extends IProveedorCreate { 
    id: string;
}