import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import api from "../../services/api";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleLogin(event) {
        event.preventDefault();
        setError("");

        if (!email.trim() || !password) {
            setError("Please enter your email and password");
            return;
        }

        try {
            setLoading(true);

            const response = await api.post("/auth/login", {
                email: email.trim(),
                password,
            });

            console.log("Logged in successfully", response);

            if (response.status >= 200 && response.status < 300) {
                navigate("/logout", { replace: true });
            }

            if (response.status === 401) return navigate("/login", {replace: false})
        } catch (err) {
            if (err.response) {
                setError(
                    err.response.data?.message ||
                    err.response.data?.msg ||
                    "Login failed. Please check your credentials."
                );
            } else {
                setError(
                    "Cannot connect to the server. Please check that Flask is running."
                );
            }
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <main className="login-page">
            <section className="login-visual">
                <div className="login-brand">
                    <span className="login-brand-icon">
                        <BookOpen size={25} />
                    </span>
                    <span>LibraryDesk</span>
                </div>

                <div className="login-visual-content">
                    <p className="login-eyebrow">YOUR LIBRARY, ORGANIZED</p>
                    <h1>
                        Every book.
                        <br />
                        Every member.
                        <br />
                        One place.
                    </h1>

                    <p className="login-description">
                        Manage your library collection, members, and borrowing
                        activities with one simple system.
                    </p>
                </div>

                <p className="login-footer">
                    Library Management System
                </p>
            </section>

            <section className="login-form-section">
                <div className="login-form-container">
                    <div className="mobile-login-brand">
                        <BookOpen size={25} />
                        <span>LibraDesk</span>
                    </div>

                    <div className="login-heading">
                        <h2> Welcome back </h2>
                        <p> Enter your account details to continue. </p>
                    </div>

                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="email"> Email address</label>
                        
                            <div className="login-input">
                                <Mail size={19} />
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="sample@example.com"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    autoComplete="username"
                                    required
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>

                            <div className="login-input">
                                <LockKeyhole size={19} />
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    autoComplete="current-password"
                                    required
                                    disabled={loading}
                                />

                                <button
                                  type="button"
                                  className="password-toggle"
                                  onClick={() => setShowPassword(!showPassword)}
                                  arial-label={
                                   showPassword ? "Hide password" : "Show password"
                                  }
                                  disabled={loading}
                                >
                                    {showPassword ? (
                                        <EyeOff size={19} />
                                    ) : (
                                        <Eye size={19} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="login-error" role="alert">
                                {error}
                            </div>
                        )}

                        <button
                          className="login-submit"
                          type="submit"
                          disabled={loading}
                        >   
                            {loading ? "Signing in..." : "Sign in"}
                        </button>
                    </form>

                    <p className="login-security-note">
                        Your account is protected by secure authentication.
                    </p>
                </div>
            </section>
        </main>
    );
}

export default Login;
