import React from "react";
import { motion } from "framer-motion";
import p20 from "../Image/p20.jpg";
import p25 from "../Image/p25.jpg";

function Arduino() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <>
                <section>
                    <div
                        className="text-white text-center py-5 position-relative"
                        style={{
                            backgroundImage: `url(${p20})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            minHeight: "200px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                zIndex: 1,
                            }}
                        ></div>

                        <div style={{ zIndex: 2 }}>
                            <div className="display-2 fw-bold">Arduino</div>
                        </div>
                    </div>
                </section>

                <section className="py-4">
                    <div className="container-fluid px-7">
                        <div className="row align-items-center">

                            <div className="col-md-7 text-center">
                                <div className="ratio ratio-21x9 rounded shadow-sm overflow-hidden">
                                    <img src={p25} style={{ objectFit: "cover" }} />
                                </div>
                            </div>

                            <div className="col-md-5">
                                <div className="bg-light rounded shadow-lg border p-3">
                                    <h5 className="fw-bold mb-3 text-uppercase text-center fs-4">Course Information</h5>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="text-muted fs-4">Lectures:</span>
                                        <span className="fw-semibold fs-4">5 sessions (1 per week)</span>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="text-muted fs-4">Duration:</span>
                                        <span className="fw-semibold fs-4">2 hours per session</span>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="text-muted fs-4">Class Size:</span>
                                        <span className="fw-semibold fs-4">20-25 Students</span>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="text-muted fs-4">Language:</span>
                                        <span className="fw-semibold fs-4">English / Cantonese</span>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="text-muted fs-4">Level:</span>
                                        <span className="fw-semibold fs-4">Intermediate</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="py-5 bg-light">
                    <div className="container text-center">
                        <h2 className="fw-bold mb-3 text-primary">Course Description</h2>
                        <p className="fs-4 text-muted">
                            This course introduces students to the fundamentals of microcontroller programming and circuit design using the Arduino platform.
                            Students will explore how sensors and actuators interact, bringing their ideas to life — from blinking LEDs to fully functional mini-robots.
                        </p>
                    </div>
                </section>

                <section className="py-4">
                    <div className="container text-center">
                        <h3 className="fw-bold mb-4 text-dark">What You’ll Learn</h3>
                        <div className="row g-4 mb-4">
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-motherboard fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Introduction to Arduino</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-diagram-3 fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Circuit Design Fundamentals</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-code-slash fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Programming Logic</h5>
                                </div>
                            </div>
                        </div>

                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-lightning fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Sensor & Actuator Control</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-tools fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Real-world Projects</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-people-fill fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Team Collaboration</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-5 bg-light">
                    <div className="container">
                        <h3 className="fw-bold text-center mb-4">Course Outline</h3>

                        <div className="accordion" id="Outline">

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week1">
                                        Week 1: Getting Started with Arduino
                                    </button>
                                </h2>
                                <div id="week1" className="accordion-collapse collapse show" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Introduction to Arduino hardware and IDE</li>
                                        <li>Uploading your first “Blink” program</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week2">
                                        Week 2: Understanding Electronics
                                    </button>
                                </h2>
                                <div id="week2" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Circuit basics: voltage, current, resistance</li>
                                        <li>Using breadboards and LEDs</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week3">
                                        Week 3: Sensors & Inputs
                                    </button>
                                </h2>
                                <div id="week3" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Reading analog/digital inputs from sensors</li>
                                        <li>Light sensor and temperature monitor exercises</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week4">
                                        Week 4: Outputs & Control
                                    </button>
                                </h2>
                                <div id="week4" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Controlling motors, buzzers, and servos</li>
                                        <li>Creating a motion-triggered alarm system</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week5">
                                        Week 5: Final Project
                                    </button>
                                </h2>
                                <div id="week5" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Combine sensors and actuators to build a smart prototype</li>
                                        <li>Present final Arduino project to the class</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

            </>


        </motion.div>
    );
}

export default Arduino;