import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function MainLayout() {
    return (
        <div className="app-layout">
            <Sidebar />

            <main className="main-content">
                <Topbar />
                
                <div className="page-content">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}


export default MainLayout;
