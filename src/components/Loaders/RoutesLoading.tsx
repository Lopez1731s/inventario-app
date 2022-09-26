import './styles/index.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme';

const RoutesLoading = () => {
    const { getTheme } = useContext(ThemeContext);

    return (
        <div className="flex justify-center mt-36" data-theme={getTheme}>
            <div className="justify-items-center">
                <div className="spinner"></div>

                <h1 className="text-4xl text-center mt-12">
                    Cargando...
                </h1>
            </div>
        </div>
    )
}
export default RoutesLoading