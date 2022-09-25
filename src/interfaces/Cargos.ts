export interface ICargos {
    id: number;
    nombre: string;
}

export interface ICargosCreate {
    nombre: string;
}

export interface ICargosUpdate extends ICargosCreate { 
    id: number;
}