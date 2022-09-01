import { SidebarData } from "./SidebarData"

const Sidebar = () => {
    return (
        <div className="flex flex-col items-start justify-start w-64 h-screen bg-neutral">
            <div className="flex items-center justify-start p-6 space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
                </svg>
                <p className="text-2xl leading-6 text-white">Phoenix App</p>
            </div>

            <div className="flex flex-col items-start justify-start space-x-3">
                {/* <div tabIndex={0} className="border collapse collapse-arrow border-base-300 bg-neutral rounded-box">
                    <div className="text-xl font-medium collapse-title">
                        Focus me to see content
                    </div>
                    <div className="collapse-content">
                        <p>tabindex="0" attribute is necessary to make the div focusable</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
export default Sidebar