import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Sidebar />
        </BrowserRouter>

    )
}
export default App