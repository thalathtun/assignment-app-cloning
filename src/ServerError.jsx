import { useNavigate } from "react-router-dom";

function ServerError() {
    const navigate = useNavigate();

    return (
        <main className="server-error">
            <h1>Server unavailable</h1>

            <p>
                We cannot connect to the server.
                Please make sure the backend is running.
            </p>
            
            <button onClick={() => navigate(0)}>
                Try Again
            </button>

        </main>
    );
}

export default ServerError;
