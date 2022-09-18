import { FC } from "react";
import { variants } from '../../types/variants';

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
        <div className="form-control mb-3">
            <textarea
                // className="textarea textarea-bordered h-24"
                className={errors[name] ? "textarea textarea-bordered textarea-error" : `textarea textarea-bordered textarea-${variant}`}
                placeholder={placeholder}
                {...register(name)}
                rows={rows}
            >

            </textarea>
            <label className="label">
                {errors[name] && <span className="label-text-alt text-error">{errors[name].message}</span>}
            </label>
        </div>
    )
}