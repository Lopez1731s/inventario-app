import { useContext } from "react";
import { ProductoContext } from "../../context";

const AddImageButtom = () => {
    const { imageArray, handleAddImage } = useContext(ProductoContext);

    return (
        <div>
            {
                imageArray.length < 10 ? (
                    <>
                        <label htmlFor="image" className="btn btn-primary-base">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg>
                            <span className="ml-2">Agregar</span>
                        </label>

                        <input
                            type="file"
                            id="image"
                            onChange={handleAddImage}
                            accept="image/*"
                            hidden
                        />
                    </>
                ) : <p className="text-error">Limite de imagenes alcanzado</p>
            }
        </div>
    )
}
export default AddImageButtom