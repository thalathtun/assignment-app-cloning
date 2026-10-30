import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ServerChecker() {
    const navigate = useNavigate();

    useEffect(() => {
        let active = true;

        async function checkServer() {
            try {
                await api.get("health")
            } catch (err) {
                if (active) {
                    navigate("/server-error", {
                        replace: true
                    });
                }
            }
        }

        checkServer();

        return () => {
            active = false;
        }
    } [navigate]);

    return null;
}


export default ServerChecker;

