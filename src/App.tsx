//react router imports
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesLoading } from "./components/Loaders";
import { NotFound } from "./components/NotFound";
import { ProductsPage } from "./pages";

//Components imports
const Sidebar = lazy(() => import("./components/SideBar/Sidebar"));
const Login = lazy(() => import("./pages/LoginPage/LoginPage"));

const App = () => {
    return (
        <Suspense fallback={<RoutesLoading />}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Sidebar />}>
                        {/* Other routes goes here */}
                        <Route path="*" element={<NotFound />} />
                        <Route path="/productos/*" element={<ProductsPage />} />
                    </Route>

                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}
export default App