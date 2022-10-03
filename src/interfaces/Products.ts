export interface IProducts {
    createdAt: Date;
    descripcion: null;
    disponible: boolean;
    id: number;
    imagenes: string;
    nombre: string;
    precioTienda: string;
    precioVenta: string;
    propiedades: {};
    sku: string;
    slug: string;
}

export interface IProductoCreate {
    nombre: string;//
    sku: string;//
    slug: string;//
    marca: string;//
    categoria: string;//
    cantidad: number;//
    proveedor: number;//
    propiedades: PropiedadesProducto;
    imagenes: string[];
    precioTienda: number;//
    precioVenta: number;//
    descripcion: string;//
    estado: boolean;
}

export interface PropiedadesProducto {
    nombre_propiedad: string;
    valor_propiedad: string;
}