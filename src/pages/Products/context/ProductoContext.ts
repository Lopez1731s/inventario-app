import { createContext } from "react";
import { PropiedadesProducto } from "../../../interfaces";
import { ImageArray } from '../interfaces';
import { IProductoCreate } from '../../../interfaces/Products';

export interface Image {
    handleAddProducto: (producto: IProductoCreate) => void;
    producto: IProductoCreate;
    saveProducto: () => void;

    imageArray: ImageArray[];
    handleAddImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDeleteImage: (index: number) => void;

    productProperties: PropiedadesProducto[];
    handleAddProductProperties: (data: PropiedadesProducto) => void;
    handleDeleteProductProperties: (index: number) => void;
}

export const ProductoContext = createContext<Image>({} as Image);