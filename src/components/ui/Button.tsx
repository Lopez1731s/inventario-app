import { FC } from "react";
import { variants } from "../../interfaces";

interface ButtonProps {
    name: string;
    variant: variants
}

export const Button: FC<ButtonProps> = ({ name, variant }) => {
    return (
        <button className={`btn btn-${variant}`}>{name}</button>
    )
}