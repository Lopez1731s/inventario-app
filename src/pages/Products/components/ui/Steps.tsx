import { Outlet, useLocation } from "react-router-dom"

const Steps = () => {
    const location = useLocation();
    const step1 = location.pathname.includes("step1");
    const step2 = location.pathname.includes("step2");
    const step3 = location.pathname.includes("step3");
    const step4 = location.pathname.includes("review");


    return (
        <div className="flex w-full space-x-4">
            <div className="p-12 rounded-md w-96 bg-base-200 h-96">
                <h1 className="text-2xl font-semibold">Pasos</h1>
                <ul className="h-full steps steps-vertical">
                    <li className="step step-primary">Información</li>
                    <li className={step2 || step3 || step4 ? "step step-primary" : "step"}>Imágenes</li>
                    <li className={step3 || step4 ? "step step-primary" : "step"}>Propiedades</li>
                    <li className={step4 ? "step step-primary" : "step"}>Revición</li>
                </ul>
            </div>

            <div className="w-full">
                <Outlet />
            </div>
        </div>
    )
}
export default Steps