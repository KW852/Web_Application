import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const navigate = useNavigate();
    const [adminId, setAdminId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8080/stem/admin/login", {
                id: adminId,
                password: password
            });

            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("isLoggedIn", "true");

                setError("");

                navigate("/Admin", { replace: true });
            } else {
                setError("Invalid credentials");
            }
        } catch (err) {
            console.error(err);
            setError("Server error. Please try again.");
        }
    };

    return (
        <div className="container-fluid bg-light">
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div
                    className="card p-4 shadow justify-content-center"
                    style={{ minWidth: "500px", minHeight: "400px", borderRadius: "15px" }}
                >
                    <h2 className="text-center fw-bold mb-4" style={{ color: "#0dcaf0" }}>Login</h2>

                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="adminId" className="form-label fw-bold">Admin ID</label>
                            <input
                                type="text"
                                className="form-control p-3"
                                id="adminId"
                                placeholder="Enter your ID"
                                value={adminId}
                                onChange={(e) => setAdminId(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="form-label fw-bold">Password</label>
                            <input
                                type="password"
                                className="form-control p-3"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && (
                            <div className="alert alert-danger py-2" role="alert">
                                {error}
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                className="btn w-100 py-2 fw-bold"
                                style={{
                                    backgroundColor: "#0dcaf0",
                                    border: "2px solid #0dcaf0",
                                    borderRadius: "10px",
                                    color: "white",
                                    transition: "0.3s"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#0bb6da";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "#0dcaf0";
                                }}
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;