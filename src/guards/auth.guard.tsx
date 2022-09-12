import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../interfaces";

interface Props {
    privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />;

export const Authguard = ({ privateValidation }: Props) => {
    const userState = true;
    return userState ? (privateValidation ? (PrivateValidationFragment) : (PublicValidationFragment)) : (<Navigate replace to={PublicRoutes.LOGIN} />);
}