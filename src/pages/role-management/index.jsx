import { useState, useEffect } from "react";
import api from "../../services/api";


function RoleList() {
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getRoles() {
            try {
                setLoading(true);
                setError("");

                const roles = await api.get("/roles/");

                setRoles(roles.data.data);
            } catch (err) {
                setError(err.message || "Failed to load user's roles.");
            } finally {
                setLoading(false);
            }

        }
        getRoles();
    }, []);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    if (!Array.isArray(roles)) return <p>The server returned an unexpected role list.</p>

    return (
        <div>
            <h1>Role List</h1>
            {roles.length === 0 ? (
                <p>No role found.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {roles.map((role) => (
                            <tr key={role.id}>
                                <td>{role.id}</td>
                                <td>{role.name}</td>
                                <td>{role.description}</td>
                                <td><p>btn edit</p><p>btn Cancel</p></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default RoleList;
        
