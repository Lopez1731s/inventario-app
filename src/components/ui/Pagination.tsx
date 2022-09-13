export const Pagination = () => {
    return (
        <div className="flex justify-between mt-6">
            <div>
                <span className="text-sm">Mostrando 1 - 10 de 100</span> <br />
                {/*                 
                    <select className="select select-bordered">
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                    </select>
                 */}
            </div>
            <div className="btn-group">
                <button className="btn">«</button>
                <button className="btn">Página 1</button>
                <button className="btn">»</button>
            </div>
        </div>
    )
}