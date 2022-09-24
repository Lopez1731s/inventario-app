import { FC } from "react";

type PaginationProps = {
    data: any[];
    totalItems: number;
    currentPage: number;
    previousPage: null;
    nextPage: number;
    totalPages: number;
}


interface IPaginationProps {
    setPage: React.Dispatch<React.SetStateAction<number>>;
    setLimit: React.Dispatch<React.SetStateAction<number>>;
    pagination: PaginationProps;
}

export const Pagination: FC<IPaginationProps> = ({ setPage, setLimit, pagination }) => {
    return (
        <div className="flex justify-between mt-6">
            <div>
                <span className="text-sm">Mostrando 1 - {pagination.data.length} de {pagination.totalItems}</span> <br />

                <select
                    className="select select-bordered"
                    onChange={(e) => setLimit(Number(e.target.value))}
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>

            </div>
            <div className="btn-group">
                {pagination.previousPage !== null && (<button className="btn" onClick={() => setPage(pagination.currentPage - 1)}>«</button>)}
                <button className="btn">Página {pagination.currentPage} / {pagination.totalPages}</button>
                {pagination.nextPage !== null && (<button className="btn" onClick={() => setPage(pagination.currentPage + 1)}>»</button>)}

            </div>
        </div>
    )
}