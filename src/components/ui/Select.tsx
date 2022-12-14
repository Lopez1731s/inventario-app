import { FC } from "react";
import { variants } from "../../types";

interface SelectProps {
    name: string;
    variant: variants;
    defaultOption: string;
    data: any;
    register: any;
    errors: any;
}

export const Select: FC<SelectProps> = ({ name, variant, defaultOption, data, register, errors }) => {
    return (
        <div className="form-control w-full">
            <select
                className={errors[name] ? "select select-bordered select-error" : `select select-bordered select-${variant}`}
                {...register(name)}
            >
                <option value={defaultOption} hidden>{defaultOption}</option>
                {
                    data.map((item: any) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))
                }
            </select>

            <label className="label">
                {errors[name] && <span className="label-text-alt text-error">{errors[name].message}</span>}
            </label>
        </div>
    )
}