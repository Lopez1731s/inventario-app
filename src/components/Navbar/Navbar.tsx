export const Navbar = () => {
    return (
        <nav className="bg-neutral absolute z-10 h-16 w-full">
            <div className="flex justify-end">
                <div className="dropdown dropdown-end">
                    <div className="avatar py-3 pr-12 cursor-pointer tooltip tooltip-left tooltip-primary" data-tip="Cuenta">
                        <div tabIndex={0} className="w-10 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-neutral rounded-box w-52">
                        <li><a>Cuenta</a></li>
                        <li><a>Cerrar sesión</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}