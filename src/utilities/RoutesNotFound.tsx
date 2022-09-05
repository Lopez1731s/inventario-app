import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../components/NotFound";

interface Props {
    children: JSX.Element | JSX.Element[];
}

const RoutesNotFound: FC<Props> = ({ children }) => {
    return (
        <Routes>
            {children}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
export default RoutesNotFound