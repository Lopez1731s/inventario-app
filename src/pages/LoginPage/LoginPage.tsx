import { useLoginMutation } from "../../features/api/authSlice";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import login from "../../assets/images/login.jpg";
import logo from "../../assets/images/warden.svg";

import { AuthCredentials } from "../../interfaces";
import { AuthSchema } from "../../schemas";

import { Button, Input, Notifications } from "../../components/ui";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { RTKresponse } from '../../interfaces/RTKresponse';

const LoginPage = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<AuthCredentials>({
        resolver: yupResolver(AuthSchema)
    });

    const [signIn] = useLoginMutation();

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<AuthCredentials> = async (data) => {
        await signIn(data)
            .unwrap()
            .then((response) => {
                console.log(response);
                toast.success('Login successful');
                navigate('/app/dashboard');
            })
            .catch((error) => {
                toast.error(error.data.message);
            });
    }

    return (
        <div className="w-full flex flex-wrap" data-theme="light">
            <Notifications />
            <div className="w-1/2 lg:h-screen flex items-stretch">
                <img src={login} className="w-full h-full object-cover" />
            </div>

            <div className="w-full md:w-1/2 flex flex-col">
                <div className="flex flex-col justify-center my-auto pt-8 px-32">
                    <img src={logo} className="h-64" />

                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-primary">Bienvenido a Warden</h2>

                    <p className="mt-2 text-center text-sm text-accent">
                        <span>Inicia sesión para continuar</span>
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6 px-12 md:px-0">
                        <Input
                            name="correo"
                            variant="primary"
                            type="email"
                            placeholder="Correo"
                            register={register}
                            errors={errors}
                        />

                        <Input
                            name="contrasenia"
                            variant="primary"
                            type="password"
                            placeholder="Contraseña"
                            register={register}
                            errors={errors}
                        />

                        <div className="flex justify-end">
                            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-500">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>

                        <Button name="Iniciar sesión" variant="primary" width="" />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default LoginPage