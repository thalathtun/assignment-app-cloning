import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Login from "./pages/auth/Login";
import UserList from "./pages/user-management/index";
import api from "./services/api";
import RoleList from "./pages/role-management/index";
import PermissionList from "./pages/permission-management/index";
import Books from "./pages/Books"
import Members from "./pages/Members";
import Borrowings from "./pages/Borrowings";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import ServerError from "./ServerError";
import Register from "./pages/auth/Register";
import LogoutButton from "./pages/auth/LogoutButton";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/logout" element={<LogoutButton />} />
                <Route path="/login" element={<Login />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/roles" element={<RoleList />} />
                <Route path="/permissions" element={<PermissionList />} />
                <Route path="/register" element={<Register />} />
                
                <Route path="/server-error" element={<ServerError />} />
    
                <Route
                    path="*"
                    element={<Navigate to="/login" replace />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
