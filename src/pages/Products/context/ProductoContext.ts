import { createContext } from "react";
import { PropiedadesProducto } from "../../../interfaces";
import { ImageArray } from '../interfaces';

export interface Image {
    imageArray: ImageArray[];
    handleAddImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDeleteImage: (index: number) => void;

    productProperties: PropiedadesProducto[];
    handleAddProductProperties: (data: PropiedadesProducto) => void;
    handleDeleteProductProperties: (index: number) => void;
}

export const ProductoContext = createContext<Image>({} as Image);