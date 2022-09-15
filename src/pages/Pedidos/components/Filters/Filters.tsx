import { Button } from "../../../../components/ui"

const Filters = () => {
    return (
        <div className="flex justify-between mb-3">
            <div className="flex">
                <div className="dropdown flex">
                    <Button name="Filtros" variant="ghost" size="xs" />
                    <button className="btn btn-ghost btn-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </button>
                    <div tabIndex={0} className="dropdown-content card card-compact w-72 p-2 mt-8 shadow bg-primary text-primary-content rounded-md">
                        <div className="card-body">
                            <div className="flex">
                                <Button name="Clear" variant="secondary" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* Cambiar este input */}
                <div className="form-control">
                    <input type="text" placeholder="Buscar" className="input input-bordered w-48" />
                </div>
            </div>
        </div>
    )
}
export default Filters