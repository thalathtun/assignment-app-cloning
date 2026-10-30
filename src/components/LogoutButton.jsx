

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Loader2 } from "lucide-react";
import api from "../../services/api";

function LogoutButton({ onLogoutSuccess }) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogout = async () => {
        if (isLoading) return;

        setIsLoading(true);
        setError(null);

        try {
            // 1. Fire the logout request to your flask backend
            const response = await api.post("/auth/logout")

            if (response.data.status === 200) {
                navigate("/login", { replace: true }); return;
            }

        } catch (err) {
            let res = err.response.data;
            if (err.response) setError(res?.msg || res || "Logged out Unsucceed.");
            else setError("Cannot connect to the server. Please check Flask is running.");
        } finally {
            setIsLoading(false);
        }

    }

    return (
        <div className="logout-btn">
            <form onSubmit={handleLogout}>
                <button 
                  type="button"
                  aria-label={isLoading ? "Logging out...." : "Logged out"}
                  onClick={handleLogout}
                >
                    {isLoading ? (
                        <Loader2 size={18} className="spin" />
                    ) : (
                        <LogOut size={18} />
                    )}
                    <span>{isLoading ? "Logging out..." : "Logged out" }</span>
                </button>
                {error && (
                    <div classaName="login-error" role="alert">
                        {error}
                    </div>
                )}
                    
            </form>
        </div>
    );

}

export default LogoutButton;
