import React from "react";
import { FaEnvelope, FaMobile } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="bg-dark py-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="display-2 text-light fw-bold text-center">
                            <div>
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
                        </div>
                    </div>

                    <div className="col-md-6 d-flex justify-content-evenly mt-4 mt-md-0">
                        <div className="d-flex align-items-center">
                            <FaLocationDot style={{ color: "white" }} size={40} />
                            <div className="text-light fs-5 p-2">Hung Hom</div>
                        </div>
                        <div className="d-flex align-items-center">
                            <FaMobile style={{ color: "white" }} size={40} />
                            <div className="text-light fs-5 p-2">+852 98765432</div>
                        </div>
                        <div className="d-flex align-items-center">
                            <FaEnvelope style={{ color: "white" }} size={40} />
                            <div className="text-light fs-5 p-3">info@stem.com</div>
                        </div>
                    </div>
                </div>

                <div className="text-light mt-4 text-center border-top border-light pt-2">
                    &copy; 2025 STEM Workshop. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;