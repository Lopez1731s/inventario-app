import { FC } from "react";
import { variants } from "../../types";

interface InputProps {
    name: string;
    variant: variants,
    type: string;
    placeholder: string;
    help?: string;
    register: any;
    errors: any;
}

export const Input: FC<InputProps> = ({ name, variant, type, placeholder, register, errors, help }) => {
    return (
        <div className="form-control w-full">
            <input
                type={type}
                placeholder={placeholder}
                className={errors[name] ? "input input-bordered input-error w-full" : `input input-bordered input-${variant} w-full`}
                {...register(name)}
            />

            <div className="flex justify-between">
                <div>
                    <label className="label">
                        {errors[name] && <span className="label-text-alt text-error">{errors[name].message}</span>}
                    </label>
                </div>
                {
                    help && (
                        <div>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-circle btn-ghost btn-xs text-info">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </label>
                                <div tabIndex={0} className="card compact dropdown-content shadow bg-base-100 rounded-md w-64">
                                    <div className="card-body">
                                        <p>{help}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}