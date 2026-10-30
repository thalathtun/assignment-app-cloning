import { NavLink } from "react-router-dom";
import {
    BookOpen,
    LayoutDashboard,
    Users,
    ArrowLeftRight,
    Library
} from "lucide-react";
import LogoutButton from "../pages/auth/LogoutButton";


const menuItems = [
    {
        name: "Dashboard",
        path: "/",
        icon: LayoutDashboard
    },
    {
        name: "Books",
        path: "/books",
        icon: BookOpen,
    },
    {
        name: "Members",
        path: "/members",
        icon: Users,
    },
    {
        name: "Borrowing",
        path: "/borrowings",
        icon: ArrowLeftRight,
    }
];

function Sidebar() {
    return(
        <aside className="sidebar">
            <div className="brand">
                <div className="brand-icon">
                    <Library size={25} />
                </div>

                <div>
                    <h2>LibraDesk</h2>
                    <p>Library Management</p>
                </div>
            </div>

            <p className="menu-label">Main Menu</p>

            <nav className="sidebar-nav">
                {menuItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          end={item.path === "/"}
                          className={({ isActive }) => 
                            isActive ? "nav-link active" : "nav-link"
                          }
                        >
                            <Icon size={19} />
                            <span>{item.name}</span>
                        </NavLink>
                    );
                })}
            </nav>

            <div className="sidebar-footer">
                <div className="avatar">AD</div>

                <div>
                    <strong>Administrator</strong>
                    <p>Library staff</p>
                </div>
                <div>
                    <LogoutButton onLogoutSuccess={"Logged successfully"} />
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
