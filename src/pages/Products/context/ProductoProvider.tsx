import { FC, useState } from "react";
import { PropiedadesProducto } from "../../../interfaces";
import { ImageArray } from "../interfaces";
import { ProductoContext } from "./ProductoContext";

interface Props {
    children: JSX.Element | JSX.Element[];
}

const ProductoProvider: FC<Props> = ({ children }) => {
    const [imageArray, setImageArray] = useState<ImageArray[]>([]);
    const [productProperties, setProductProperties] = useState<PropiedadesProducto[]>([]);

    const handleAddImage = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => setImageArray([...imageArray, { image_name: file.name, image_url: reader.result as string, image_file: file }]);
    }

    const handleDeleteImage = (index: number) => {
        const newArray = imageArray.filter((item, i) => i !== index);
        setImageArray(newArray);
    }

    const handleAddProductProperties = (data: PropiedadesProducto) => {
        setProductProperties([...productProperties, data]);
    }

    const handleDeleteProductProperties = (index: number) => {
        const newArray = productProperties.filter((item, i) => i !== index);
        setProductProperties(newArray);
    }

    return (
        <ProductoContext.Provider value={{
            imageArray,
            handleAddImage,
            handleDeleteImage,
            productProperties,
            handleAddProductProperties,
            handleDeleteProductProperties
        }}>
            {children}
        </ProductoContext.Provider>
    )
}
export default ProductoProvider