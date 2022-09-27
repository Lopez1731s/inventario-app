import './styles/index.css';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme/ThemeContext';

const RoutesLoading = () => {
    const { getTheme } = useContext(ThemeContext);

    return (
        <div className="h-full" data-theme={getTheme}>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="spinner"></div>
                <h1 className="text-4xl text-center mt-12">
                    Cargando...
                </h1>
            </div>
        </div>
    )
}
export default RoutesLoading