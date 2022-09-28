import { FC } from "react";
import { variants } from "../../types";

interface DatePickerProps {
    name: string;
    variant: variants,
    type: string;
    placeholder: string;
    minDate?: Date | string;
    register: any;
    errors: any;
}

export const DatePicker: FC<DatePickerProps> = ({ name, variant, type, placeholder, minDate, register, errors }) => {
    return (
        <div className="form-control w-full">
            <input
                type={type}
                placeholder={placeholder}
                className={errors[name] ? "input input-bordered input-error w-full" : `input input-bordered input-${variant} w-full`}
                {...register(name)}
                min={minDate}
            />

            <div className="flex justify-between">
                <div>
                    <label className="label">
                        {errors[name] && <span className="label-text-alt text-error">{errors[name].message}</span>}
                    </label>
                </div>
            </div>
        </div>
    )
}