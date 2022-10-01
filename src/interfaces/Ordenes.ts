export interface IOrden {
    id: number;
    total: string;
    createdAt: Date;
    deletedAt: null;
}

export interface IOrdenCreate {
    detalleOrdenes: DetalleOrdene[];
}

export interface DetalleOrdene {
    productoId: number;
    cantidad: number;
}