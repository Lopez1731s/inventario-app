import { LinkButton, LinkButtonActions } from "../ui"

const ErrorLoading = () => {
    return (
        <div className="flex justify-center mt-36">
            <div className="justify-items-center">
                <div className="flex justify-center py-8">
                    <svg width="200" height="200" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10 13.1538V21" stroke="currentColor" strokeLinecap="round" /> <path d="M15 8.38452V11.1538C15 12.2583 14.1046 13.1538 13 13.1538H7C5.89543 13.1538 5 12.2583 5 11.1538V8.38452C5 7.27995 5.89543 6.38452 7 6.38452H13C14.1046 6.38452 15 7.27995 15 8.38452Z" stroke="currentColor" strokeLinecap="round" /> <path d="M13.3334 6.38462V3" stroke="currentColor" strokeLinecap="round" /> <path d="M6.66663 6.38462V3" stroke="currentColor" strokeLinecap="round" /> <path d="M15.1213 21.364L17.2427 19.2427M17.2427 19.2427L19.364 17.1213M17.2427 19.2427L15.1213 17.1213M17.2427 19.2427L19.364 21.364" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /> </svg>
                </div>

                <h1 className="text-4xl text-center mb-4">
                    Perdimos la conexión.
                </h1>

                <h1 className="text-md text-center mb-4 text-accent">
                    Lamentamos los inconvenientes, regresa en unos minutos.
                </h1>

                <div className="flex justify-center">
                    <LinkButton link="/" variant="primary" action={LinkButtonActions.Home} name="Ir al inicio" />
                </div>
            </div>
        </div>
    )
}
export default ErrorLoading