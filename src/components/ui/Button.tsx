import { FC } from "react";
import { Sizes, variants } from "../../types";

interface ButtonProps {
    name: string;
    variant: variants;
    size?: Sizes;
    width?: string;
}

export const Button: FC<ButtonProps> = ({ name, variant, size, width }) => {
    return (
        <button className={`btn btn-${variant} ${size ? "btn-" + size : ""} ${width ? width : ""}`} >{name}</button>
    )
}