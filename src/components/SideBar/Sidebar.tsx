import { useState } from "react"
import { NavLink, Outlet } from "react-router-dom";
import { SidebarData } from "./SidebarData"

const Sidebar = () => {
    const [open, setOpen] = useState<boolean>(true);

    return (
        <div className="flex">
            <div className={`bg-neutral h-screen z-20 p-5 pt-8 ${open ? "w-72" : "w-20"} duration-500 relative`}>
                <button
                    className={`bg-white text-base-100 text-3xl rounded-full absolute -right-3 top-12 ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </button>

                <div className="inline-flex">
                    <div className="block float-left mr-5 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
                        </svg>
                    </div>
                    <h1 className={`text-white origin-left font-medium text-3xl duration-300 ${!open && "scale-0"}`}>
                        E-Warden
                    </h1>
                </div>

                <ul className="pt-2 mt-4">
                    {
                        SidebarData.map((item, index) => (
                            <li key={index}>
                                <p className={`text-sm mt-8 ${!open && "hidden"}`}>
                                    {item.menu}
                                </p>

                                {
                                    item.submenu?.map((subitem, subindex) => (
                                        <NavLink
                                            key={subindex}
                                            to={subitem.url}
                                            className={({ isActive }) => isActive ? "text-gray-300 text-sm flex items-center cursor-pointer p-2 mt-2 bg-secondary rounded-md" : "text-gray-300 text-sm flex items-center cursor-pointer p-2 mt-2 hover:bg-secondary rounded-md"}
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

            <div className={`${open ? "mx-28" : "mx-28"} pt-8 duration-500`}>
                <Outlet />
            </div>
        </div>
    )
}
export default Sidebar