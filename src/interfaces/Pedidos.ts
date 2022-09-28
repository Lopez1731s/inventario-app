export interface IPedido {
    id: number;
    proveedorId: number;
    total: string;
    estadoEnvio: string;
    estadoPago: string;
    createdAt: Date;
}

export interface IPedidoForm {
    proveedorId: number;
    productoId: number;
    cantidad: number;
    precio: number;
    fechaEntrega: Date;
}

export interface IPedidoCreate {
    proveedorId: number;
    detallePedidos: DetallePedido[];
    fechaEntrega: Date;
}

export interface DetallePedido {
    productoId: number;
    cantidad: number;
    precio: number;
}

