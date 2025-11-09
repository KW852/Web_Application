// import React from "react";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";

function HoverLink({ to, children, className = "", dropdown = false, ...props }) {
    const [hover, setHover] = useState(false);
    const baseColor = "#0dcaf0";
    const hoverColor = "#ff9900";

    return (
        <Link
            to={to}
            className={`${className} ${dropdown ? "dropdown-item" : "nav-link"} fs-4 fw-bold me-3 px-3`}
            style={{ color: hover ? hoverColor : baseColor }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            {...props}
        >
            {children}
        </Link>
    );
}

function Navbar() {
    const location = useLocation();
    const isAdminPage = location.pathname === "/Admin";

    return (
        <nav className="navbar navbar-expand-lg bg-body px-5" data-bs-theme="dark">
            <div className="container-fluid">
                <div className="navbar-brand fs-2 fw-bold">
                    <span style={{ color: "#ff4c4c" }}>S</span>
                    <span style={{ color: "#ff9900" }}>T</span>
                    <span style={{ color: "#2ecc71" }}>E</span>
                    <span style={{ color: "#3498db" }}>M</span>
                    <span style={{ color: "#555" }}> </span>
                    <span style={{ color: "#9b59b6" }}>W</span>
                    <span style={{ color: "#f1c40f" }}>o</span>
                    <span style={{ color: "#e67e22" }}>r</span>
                    <span style={{ color: "#1abc9c" }}>k</span>
                    <span style={{ color: "#e84393" }}>s</span>
                    <span style={{ color: "#c0189cff" }}>h</span>
                    <span style={{ color: "#d35400" }}>o</span>
                    <span style={{ color: "#c0392b" }}>p</span>
                </div>

                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {!isAdminPage && (
                    <>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-5">
                                <li className="nav-item">
                                    <HoverLink to="/">Home</HoverLink>
                                </li>

                                <li className="nav-item">
                                    <HoverLink to="/About">About Us</HoverLink>
                                </li>

                                <li className="nav-item dropdown">
                                    <HoverLink className="nav-link dropdown-toggle"
                                        to="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        onClick={(e) => e.preventDefault()}>
                                        STEM Courses
                                    </HoverLink>
                                    <ul className="dropdown-menu" style={{ minWidth: "280px", padding: "0.25rem 0.5rem" }}>
                                        <li>
                                            <HoverLink to="/Micro" dropdown>Micro:bit</HoverLink>
                                        </li>
                                        <li>
                                            <HoverLink to="/Arduino" dropdown>Arduino</HoverLink>
                                        </li>
                                        <li>
                                            <HoverLink to="/Scratch" dropdown>Scratch</HoverLink>
                                        </li>
                                        <li>
                                            <HoverLink to="/Python" dropdown>Python</HoverLink>
                                        </li>
                                        <li>
                                            <HoverLink to="/MIT" dropdown>MIT App Inventor</HoverLink>
                                        </li>
                                        <li>
                                            <HoverLink to="/VEX" dropdown>VEX IQ</HoverLink>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <HoverLink to="/Contact">Contact Us</HoverLink>
                                </li>

                                <li className="nav-item">
                                    <HoverLink to="/Careers">Careers</HoverLink>

                                </li>

                            </ul>
                        </div>

                        <div className="nav-item">
                            <Link
                                to="/Login"
                                className="fw-bold fs-5 px-4 py-2 ms-2 text-decoration-none"
                                style={{
                                    backgroundColor: "#000",
                                    border: "2px solid #fff",
                                    borderRadius: "10px",
                                    transition: "all 0.3s ease",
                                    color: "#0dcaf0"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "#212529";
                                    e.target.style.borderColor = "#ff9900";
                                    e.target.style.color = "#ff9900";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "#212529";
                                    e.target.style.borderColor = "#0dcaf0";
                                    e.target.style.color = "#0dcaf0";
                                }}
                            >
                                Login
                            </Link>
                        </div>
                    </>
                )}

                {isAdminPage && (
                    <div className="nav-item">
                        <Link
                            to="/Login"
                            onClick={() => {
                                localStorage.removeItem("isLoggedIn");
                                localStorage.removeItem("token");
                            }}
                            className="fw-bold fs-5 px-4 py-2 ms-2 text-decoration-none"
                            style={{
                                backgroundColor: "#000",
                                border: "2px solid #fff",
                                borderRadius: "10px",
                                transition: "all 0.3s ease",
                                color: "#0dcaf0"
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#212529";
                                e.target.style.borderColor = "#ff9900";
                                e.target.style.color = "#ff9900";
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "#212529";
                                e.target.style.borderColor = "#0dcaf0";
                                e.target.style.color = "#0dcaf0";
                            }}
                        >
                            Logout
                        </Link>
                    </div>
                )}

            </div>
        </nav >

    );
}

export default Navbar;