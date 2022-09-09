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
                <button className="btn">1</button>
                <button className="btn">2</button>
                <button className="btn btn-disabled">...</button>
                <button className="btn">99</button>
                <button className="btn">100</button>
                <button className="btn">»</button>
            </div>
        </div>
    )
}