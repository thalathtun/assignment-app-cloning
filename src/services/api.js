import axios from "axios";
import getCookie from "../utils/cookies";

const api = axios.create({
    baseURL:
        import.meta.env.VITE_API_BASE_URL ||
        "http://127.0.0.1:5000",

    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },

    timeout: 5000,
});

api.interceptors.request.use((config) => {
	const method = config.method?.toUpperCase();
	if (["POST", "PUT", "PATCH", "DELETE"].includes(method)) {
		const csrfToken = getCookie("csrf_access_token");

		if (csrfToken) {
			config.headers["X-CSRF-TOKEN"] = csrfToken;
		}
	}

	return config;
});

api.interceptors.response.use(
    (response) => {
        return response;
    },

    (error) => {
        const status = error.response?.status;
        const requestUrl = error.config?.url;

        if (
          status === 401 &&
          requestUrl !== "/auth/login" &&
          window.location.pathname !== "/login"
        ) {
            window.location.assign("/login");
        }


        return Promise.reject(error);
    }
);

export default api;
