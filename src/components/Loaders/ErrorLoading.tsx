const ErrorLoading = () => {
    return (
        <div className="w-full h-96 flex justify-center">
            <div className="error_loader"></div>
            <h2 className="text-3xl my-8 ml-8">
                Algo salió mal, por favor intente nuevamente.
            </h2>
        </div>
    )
}
export default ErrorLoading