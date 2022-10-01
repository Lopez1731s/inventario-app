import { Route } from "react-router-dom"
import { RoutesNotFound } from "../../utilities"
import { lazy, Suspense } from 'react';
import { RoutesLoading } from "../../components/Loaders";

const MainPage = lazy(() => import('./components/MainPage'));

const DashboardPage = () => {
    return (
        <Suspense fallback={<RoutesLoading />}>
            <RoutesNotFound>
                <Route path="/" element={<MainPage />} />
            </RoutesNotFound>
        </Suspense>
    )
}
export default DashboardPage