import { Route } from 'react-router-dom';

import RoutesNotFound from '../../../utilities/RoutesNotFound';
import AddInfoProducto from './AddInfoProducto';
import { ProductImages, ProductProperties, ProductReview } from './Forms';
import { Steps } from './ui';

const NewProduct = () => {
    return (
        <RoutesNotFound>
            <Route element={<Steps />}>
                <Route path="step1" element={<AddInfoProducto />} />
                <Route path="step2" element={<ProductImages />} />
                <Route path="step3" element={<ProductProperties />} />
                <Route path="review" element={<ProductReview />} />
            </Route>
        </RoutesNotFound>
    )
}
export default NewProduct