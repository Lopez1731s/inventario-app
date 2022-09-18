import { FC } from "react";
import { Sizes, variants } from "../../types";

interface ButtonProps {
    name: string;
    variant: variants;
    size?: Sizes;
}

export const Button: FC<ButtonProps> = ({ name, variant, size }) => {
    return (
        <button className={`btn btn-${variant} btn-${size}`}>{name}</button>
    )
}