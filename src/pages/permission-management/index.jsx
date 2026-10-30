import { useState, useEffect } from "react";
import api from "../../services/api";

function PermissionList() {
    const [permissions, setPermissions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        async function getPermissions() {
            try {

                setLoading(true);
                setError("");
                const permissions = await api.get("/permissions/");

                setPermissions(permissions.data.data);
            } catch(err) {
                setError(err.message || "Failed to load user permissions");
            } finally {
                setLoading(false);
            }
        }

        getPermissions();

    }, []);

    if (error) return <p>Error: {error} </p>
    if (loading) return <p>Loading...</p>
    if (!Array.isArray(permissions)) return <p>The server returned an unexpected permission list.</p>

    return (
        <div>
            <h1>Permission List</h1>

            {permissions.length === 0 ? (
                <p>No permissions found.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {permissions.map((permission) => (
                            <tr key={permission.id}>
                                <td>{permission.id}</td>
                                <td>{permission.name}</td>
                                <td>{permission.description}</td>
                                <td>edit and delete</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );

}

export default PermissionList;
