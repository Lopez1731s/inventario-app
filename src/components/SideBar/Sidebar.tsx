import { useState, useContext } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { ThemeContext } from '../../context/theme';
import { Navbar } from "../Navbar/Navbar";
import { SidebarData } from "./SidebarData";


const Sidebar = () => {
    const [open, setOpen] = useState<boolean>(true);

    const { getTheme } = useContext(ThemeContext);

    return (
        <div className="flex min-h-screen" data-theme={getTheme}>
            <Navbar />
            <div className={`bg-base-200 z-20 p-5 pt-8 ${open ? "w-72" : "w-20"} duration-500 relative border-r border-accent shadow-sm`}>

                <button
                    className={`bg-secondary text-primary text-3xl rounded-full absolute -right-3 top-12 border ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </button>

                <div className="inline-flex">
                    <div className="block float-left mr-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={40} height={40} fill="currentColor">
                            <rect width="256" height="256" fill="none" />
                            <path d="M79,47.5l49,27.6,49-27.6L131.9,22.2a7.8,7.8,0,0,0-7.8,0Z" opacity="0.2" />
                            <path d="M176,209V153.9l48-27v50.4a8.1,8.1,0,0,1-4.1,7Z" opacity="0.2" />
                            <path d="M80,209V153.9l-48-27v50.4a8.1,8.1,0,0,0,4.1,7Z" opacity="0.2" /><path d="M224,177.3V78.7a8.1,8.1,0,0,0-4.1-7l-88-49.5a7.8,7.8,0,0,0-7.8,0l-88,49.5a8.1,8.1,0,0,0-4.1,7v98.6a8.1,8.1,0,0,0,4.1,7l88,49.5a7.8,7.8,0,0,0,7.8,0l88-49.5A8.1,8.1,0,0,0,224,177.3Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                            <polyline points="222.9 74.6 128.9 128 33.1 74.6" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                            <line x1="128.9" y1="128" x2="128" y2="234.8" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                            <polyline points="177 47.5 128 75.1 79 47.5" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                            <polyline points="176 209 176 153.9 224 126.9" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                            <polyline points="80 209 80 153.9 32 126.9" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
                        </svg>
                    </div>
                    <h1 className={`text-primary origin-left font-medium text-3xl duration-300 ${!open && "scale-0"}`}>
                        Warden
                    </h1>
                </div>

                <ul className="pt-2 mt-4">
                    {
                        SidebarData.map((item, index) => (
                            <li key={index}>
                                <p className={`text-sm text-primary-wh mt-8 ${!open && "hidden"}`}>
                                    {item.menu}
                                </p>

                                {
                                    item.submenu?.map((subitem, subindex) => (
                                        <NavLink
                                            key={subindex}
                                            to={subitem.url}
                                            className={({ isActive }) => isActive ? "text-secondary text-sm flex items-center cursor-pointer p-2 mt-2 bg-primary rounded-md" : "text-primary text-sm flex items-center cursor-pointer p-2 mt-2 hover:bg-primary hover:text-secondary rounded-md"}
                                        >
                                            {
                                                open ? (
                                                    subitem.icon
                                                ) : (
                                                    <div className="tooltip tooltip-right" data-tip={subitem.name}>
                                                        {subitem.icon}
                                                    </div>
                                                )
                                            }
                                            <span className={`text-sm ml-2 ${!open && "hidden"}`}>
                                                {subitem.name}
                                            </span>
                                        </NavLink>
                                    ))
                                }
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className={`${open ? "mx-28" : "mx-28"} pt-28 w-full duration-500 h-full`}>
                <Outlet />
            </div>
        </div>
    )
}
export default Sidebar