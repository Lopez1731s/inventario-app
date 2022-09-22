import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Notifications } from '../../../../components/ui';
import { ProductoContext } from '../../context';
import { AddImageButtom, DeleteImageButtom } from '../ui';
import { toast } from 'react-toastify';

const ProductImages = () => {
    const { imageArray } = useContext(ProductoContext);
    const navigate = useNavigate();

    const nextStep = () => imageArray.length > 0 ? navigate("/app/productos/crear/step3") : toast.error("Debes agregar al menos una imagen");

    return (
        <div className="card w-full bg-base-200 shadow-md rounded-md mt-9 mb-9">
            <Notifications />
            <div className="card-body">
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold">Imagenes</h1>
                        <span className="text-primary-base ">Agrega un maximo de 10 imagenes</span>
                    </div>

                    <AddImageButtom />
                </div>

                <div className="overflow-x-auto w-full h-full mt-3">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="bg-primary text-secondary">Imagen</th>
                                <th className="bg-primary text-secondary">Nombre de la imagen</th>
                                <th className="bg-primary text-secondary">Eliminar</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                imageArray.length > 0 ? imageArray.map((image, index) => (
                                    <tr key={index}>
                                        <td><img src={image.image_url} alt="" className="h-20 w-20 rounded-md" /></td>

                                        <td>{image.image_name}</td>

                                        <td>
                                            <DeleteImageButtom
                                                index={index}
                                            />
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={3} className="text-center">
                                            Tus imagenes apareceran aqui.
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between mt-3">
                    <Link to="/app/productos/crear/step1" className="btn btn-primary">Atras</Link>
                    <button className="btn btn-primary" onClick={nextStep}>Siguiente</button>
                </div>
            </div>
        </div>
    )
}
export default ProductImages