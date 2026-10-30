import { useState, useEffect } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function UserList() {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getUsers() {
            try {
                setLoading(true);
                setError("");

                const users = await api.get("/users/");

                setUsers(users.data.data);

            } catch(err) {
                if (!err.response) alert("Cannot connect to the server. Please check flask is running.");
                else if (err.response.status === 401) navigate("/login", { replace: true });
                setError(err.message || "Failed to load users.");
            } finally {
                setLoading(false);
            }
        }

        getUsers();
    }, []);

    if (loading) return <p>Loading users...</p>
    if (error) return <p>Error: {error}</p>
    if (!Array.isArray(users)) return <p>The server returned an unexpected user list.</p>

    return (
        <div>
            <h1>User List</h1>
            {users.length === 0 ? (
                <p>No user found.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Full Name</th>
                            <th>is Active</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.full_name}</td>
                                <td>{user.is_active ? "Active" : "Inactive"}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default UserList;
