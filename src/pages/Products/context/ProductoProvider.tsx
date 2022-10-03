import { FC, useState } from "react";
import { useAddProductImagesMutation, useCreateProductMutation } from "../../../features/products/productSlice";
import { IProductoCreate, PropiedadesProducto } from "../../../interfaces";
import { ImageArray } from "../interfaces";
import { ProductoContext } from "./ProductoContext";
import { toast } from 'react-toastify';

interface Props {
    children: JSX.Element | JSX.Element[];
}

const ProductoProvider: FC<Props> = ({ children }) => {
    const [createProduct] = useCreateProductMutation();
    const [createImages] = useAddProductImagesMutation();

    const [producto, setProducto] = useState<IProductoCreate>({} as IProductoCreate);

    const [imageName, setImageName] = useState<string[]>([]);
    const [imageArray, setImageArray] = useState<ImageArray[]>([]);

    const [productProperties, setProductProperties] = useState<PropiedadesProducto[]>([]);
    const [propiedades, setPropiedades] = useState({});

    const handleAddProducto = (data: IProductoCreate) => {
        setProducto(data);
    }

    const handleAddImage = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        const formData = new FormData();
        formData.append("file", file);

        createImages(formData).unwrap()
            .then((res) => setImageName([...imageName, res.fileName]))
            .catch(() => toast.error("El formato de la imagen no es valido"));


        reader.onload = () => setImageArray([...imageArray, { image_name: file.name, image_url: reader.result as string }]);
    }

    const handleDeleteImage = (index: number) => {
        const newArray = imageArray.filter((item, i) => i !== index);
        setImageArray(newArray);
    }

    const handleAddProductProperties = (data: PropiedadesProducto) => {
        setProductProperties([...productProperties, data]);
        setPropiedades({ ...propiedades, [data.nombre_propiedad]: data.valor_propiedad });
    }

    const handleDeleteProductProperties = (index: number) => {
        const newArray = productProperties.filter((item, i) => i !== index);
        setProductProperties(newArray);
    }

    const saveProducto = () => {
        const data = {
            ...producto,
            imagenes: imageName,
            propiedades: propiedades,
            estado: true
        }

        toast.promise(
            createProduct(data)
                .unwrap(),
            {
                pending: "Guardando producto",
                success: "Producto guardado",
                error: "Error al guardar el producto"
            });
    }



    return (
        <ProductoContext.Provider value={{
            handleAddProducto,
            producto,
            imageArray,
            handleAddImage,
            handleDeleteImage,
            productProperties,
            handleAddProductProperties,
            handleDeleteProductProperties,
            saveProducto,
        }}>
            {children}
        </ProductoContext.Provider>
    )
}
export default ProductoProvider