import { Route } from 'react-router-dom';

import RoutesNotFound from '../../../utilities/RoutesNotFound';
import AddInfoProducto from './AddInfoProducto';
import { ProductImages, ProductProperties } from './Forms';

const NewProduct = () => {
    return (
        <RoutesNotFound>
            {/* <Route path="/" element={<Navigate to="step1" />} /> */}
            <Route path="step1" element={<AddInfoProducto />} />
            <Route path="step2" element={<ProductImages />} />
            <Route path="step3" element={<ProductProperties />} />
        </RoutesNotFound>
    )
}
export default NewProduct