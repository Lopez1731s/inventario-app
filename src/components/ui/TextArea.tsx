import { FC } from "react";
import { variants } from "../../interfaces";

interface TextAreaProps {
    name: string;
    variant: variants,
    rows: number;
    placeholder: string;
    register: any;
    errors: any;
}

export const TextArea: FC<TextAreaProps> = ({ name, variant, rows, placeholder, register, errors }) => {
    return (
        <div className="form-control">
            <textarea
                // className="textarea textarea-bordered h-24"
                className={errors[name] ? "textarea textarea-bordered textarea-error" : `textarea textarea-bordered textarea-${variant}`}
                placeholder={placeholder}
                {...register(name, { required: "Requeried" })}
                rows={rows}
            >

            </textarea>
            <label className="label">
                {errors[name] && <span className="label-text-alt">{errors[name].message}</span>}
            </label>
        </div>
    )
}