
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Loader2 } from "lucide-react";
import api from "../../services/api";
import getCookie from "../../utils/cookies";

function LogoutButton({ onLogoutSuccess }) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLogout = async () => {
        if (isLoading) return;


        setIsLoading(true);
        setError(null);

        try {
            const csrfToken = getCookie("csrf_access_token");

            if (!csrfToken) {
                alert("CSRF token is missing. Please log in again.");
                return;
            }
            const response = await api.post(
	        "/auth/logout",
	 	{},
		{
		    headers: {
			"X-CSRF-TOKEN": csrfToken
		    }
		}

	    );

            console.log("HTTP status:", response.data?.status);
            console.log("Backend response:", response.data);

            if (response.status === 200) {
                // Update authentication state in the parent.
                onLogoutSuccess?.();

                // Redirect after successful logout.
                navigate("/login", { replace: true });
            }
        } catch (err) {
            if (err.response) {
                setError(
                    err.response.data?.msg ||
                    "Logout failed. Please try again."
                );
            } else {
                setError(
                    err || "Cannor connect to Flask. Check the server and network settings."
                );
            }
        } finally {
            setIsLoading(false);
        }
    };

    if (error) {console.log(error); return;}

    return (
        <div className="logout-btn">
            <button
                type="button"
                onClick={handleLogout}
                disabled={isLoading}
                aria-label={isLoading ? "Logging out..." : "Logout"}
            >
                {isLoading ? (
                    <Loader2 className="spin" size={18} />
                ) : (
                    <LogOut size={18} />
                )}

                <span>
                    {isLoading ? "Logging out..." : "Logout"}
                </span>
            </button>

            {error && (
                <div className="login-error" role="alert">
                    {error}
                </div>
                
            )}
        </div>

    );
}

export default LogoutButton;
