export interface ICategorias {
    id: number;
    nombre: string;
    deletedAt: Date | null;
}

export interface ICategoriasCreate {
    nombre: string;
}