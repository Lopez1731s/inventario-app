import { Link } from "react-router-dom";
import { FC } from 'react';

interface LinkOptionsProps {
    link: string;
    title: string;
}

const LinkOptions: FC<LinkOptionsProps> = ({ link, title }) => {
    return (

        <Link to={link}>
            <div className="flex justify-between bg-base-200 hover:bg-base-300 h-14 py-4 px-8 w-full p-4 cursor-pointer  rounded-md">
                <p className="text-lg">{title}</p>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                </div>
            </div>
        </Link>
    )
}
export default LinkOptions