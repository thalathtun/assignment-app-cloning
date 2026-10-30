import { UserRound, Mail, LockKeyhole, ShieldCheck, AtSign, UserRoundPlus, EyeOff, BookOpen, Eye } from "lucide-react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmationPassword, setShowConfirmationPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleRegistration(e) {
        e.preventDefault();

        if (!email.trim() || !password) {
            setError("Please enter your information in fields.");
            return;
        }

        if (password !== confirmationPassword) {
            setError("Your Password must be matched.");
            return;
        }

        try {
            setLoading(true);
            const response = await api.post("/auth/register", {
                email: email.trim(),
                username: username,
                password: password,
                confirmation_password: confirmationPassword,
                full_name: fullName,
            });

            if (response.status >= 200 && response.status < 300) {
                navigate("/", { replace: true });
            }
        } catch(err) {
            if (err.response) {
                if (err.response.data?.status === 400) {
                    setError(
                        err.response.data?.errors, "\n"
                    );
                }
            } else {
                setError(
                    "Cannot connect to the server. please check that Flask is running."
                );
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="register-page">
            <section className="register-visual">
                <div className="register-brand">
                    <span className="register-brand-icon">
                        <BookOpen size={25} />
                    </span>
                    <span>LibraDesk</span>
                </div>

                <div className="register-visual-content">
                    <p className="register-eyebrow">YOUR LIBRARY REGISTRATION</p>

                    <h1>
                        Every book
                        <br />
                        Every member
                        <br />
                        One place
                    </h1>

                    <p className="register-description">
                        Manage your library collection, members, and borrowing
                        activities with one simple system.
                    </p>
                </div>

                <p className="register-footer">
                    Library Management System.
                </p>
            </section>

            <section className="register-form-section">
                <div className="register-form-container">
                    <div className="mobile-register-brand">
                        <BookOpen size={25} />
                        <span>LibraDesk</span>
                    </div>


                    <div className="register-heading">
                        <h2>Welcome to LibraDesk</h2>
                        <p>Create your first account to get new experience on Digital Collection
                            Book library.
                        </p>
                    </div>

                    <form onSubmit={handleRegistration} >
                        <div className="form-group">
                            <label htmlFor="full_name">Full Name</label>
                            <div className="register-input">
                                <UserRound size={19} />
                                <input 
                                  id="full_name"
                                  type="full_name"
                                  placeholder="FirstName LastName"
                                  value={fullName}
                                  onChange={(e) => setFullName(e.target.value)}
                                  autoComplete="full_name"
                                  required
                                  disabled={loading}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <div className="register-input">
                                <UserRound size={19} />
                                <input
                                  type="username"
                                  placeholder="username"
                                  onChange={(e) => setUsername(e.target.value)}
                                  autoComplete="current-username"
                                  required
                                  disabled={loading}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <div className="form-input">
                                <Mail size={19} />

                                <input
                                  id="email"
                                  type="email"
                                  placeholder="sample@example.com"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  autoComplete="email"
                                  required
                                  disabled={loading}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <div className="form-input">
                                <LockKeyhole size={19} />
                                <input
                                  id="password"
                                  type={showPassword ? "text" : "password"}
                                  placeholder="Enter a strong password"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
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

                        <div className="form-group">
                            <label htmlFor="confirmationPassword">Confirm Password</label>
                            <div className="form-input">
                                <ShieldCheck size={19} />
                                <input
                                  id="confirmationPassword"
                                  type={showConfirmationPassword ? "text" : "password"}
                                  value={confirmationPassword}
                                  onChange={(e) => setConfirmationPassword(e.target.value)}
                                  autoComplete="confirmationPassword"
                                  required
                                  disabled={loading}
                                  placeholder="Re-enter strong password"
                                />

                                <button
                                  type="button"
                                  className="password-toggle"
                                  onClick={() => setShowConfirmationPassword(!showConfirmationPassword)}
                                  arial-label={
                                    showConfirmationPassword ? "Hide Confirm password" : "Show Confirm password"
                                  }
                                  disabled={loading}
                                >
                                    {showConfirmationPassword ? (
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
                            {loading ? "Signing up..." : "Sign Up"}
                        </button>
                    </form>

                    <p className="login-security-note">
                        Yout account is protected by secured authentication.
                    </p>
                </div>
            </section>
        </main>
    );
}

export default Register;
