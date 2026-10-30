import {useLocation } from "react-router-dom";
import { Search, Bell } from "lucide-react";

const pageTitle = {
    "/": "Dashboard",
    "/books": "Books Management",
    "/members": "Memebers Management",
    "/borrowing": "Borrowing Management",
};

function Topbar() {
    const location = useLocation();
    const title = pageTitle[location.pathname] || "Library Management";

    return (
        <header className="topbar">
            <div>
                <p className="breadcrumb"> Library / {title}</p>
                <h1>{title}</h1>
            </div>
            
            <div className="topbar-actions">
                <label className="search-box">
                    <Search size={18} />
                    <input type="text" placeholder="Search..." />
                </label>
                <button
                  type="button"
                  className="icon-button"
                  arial-label="Notifications"
                    title="Notifications"
                >
                    <Bell size={20} />
                </button>
            </div>
        </header>
    );
}

export default Topbar;

