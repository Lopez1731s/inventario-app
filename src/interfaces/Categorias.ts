export interface ICategorias {
    id: number;
    nombre: string;
    deletedAt: Date | null;
}

export interface ICategoriasCreate {
    nombre: string;
}
export interface ICategoriasUpdate extends ICategoriasCreate {
    id: number;
}