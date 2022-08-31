import { FC } from "react";
import { variants } from "../../interfaces";

interface InputProps {
    name: string;
    variant: variants,
    type: string;
    placeholder: string;
    register: any;
    errors: any;
}

export const Input: FC<InputProps> = ({ name, variant, type, placeholder, register, errors }) => {
    console.log(errors);
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                className={errors[name] ? "input input-bordered input-error w-full max-w-xs" : "input input-bordered input-${variant} w-full max-w-xs"}
                {...register(name, { required: "Requeried" })}
            />
            
            <label className="label">
                {errors[name] && <span className="label-text-alt">{errors[name].message}</span>}
            </label>
        </>
    )
}