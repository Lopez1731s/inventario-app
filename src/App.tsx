//react router imports
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route } from "react-router-dom";

import { store } from "./features/store";
import { PrivateRoutes, PublicRoutes } from "./interfaces";

//Components imports
import { RoutesLoading } from "./components/Loaders";
import { Authguard } from "./guards";
import { Private } from "./pages";
import { RoutesNotFound } from "./utilities";
import { ThemeProvider } from "./context/theme";

const Login = lazy(() => import("./pages/LoginPage/LoginPage"));

const App = () => {
    return (
        <Suspense fallback={<RoutesLoading />}>
            <Provider store={store}>
                <ThemeProvider>
                    <BrowserRouter>
                        <RoutesNotFound>
                            <Route path="/" element={<Navigate to={`${PrivateRoutes.PRIVATE}/dashboard`} />} />

                            <Route element={<Authguard privateValidation={true} />}>
                                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
                            </Route>

                            <Route path={PublicRoutes.LOGIN} element={<Login />} />
                        </RoutesNotFound>
                    </BrowserRouter>
                </ThemeProvider>
            </Provider>
        </Suspense>
    )
}
export default App