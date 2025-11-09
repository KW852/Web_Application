import React from "react";
import { motion } from "framer-motion";
import p24 from "../Image/p24.jpg";
import p29 from "../Image/p29.jpg";


function VEX() {
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
                            backgroundImage: `url(${p24})`,
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
                            <div className="display-2 fw-bold">VEX IQ</div>
                        </div>
                    </div>
                </section>

                <section className="py-4">
                    <div className="container-fluid px-7">
                        <div className="row align-items-center">

                            <div className="col-md-7 text-center">
                                <div className="ratio ratio-21x9 rounded shadow-sm overflow-hidden">
                                    <img src={p29} style={{ objectFit: "cover" }} />
                                </div>
                            </div>

                            <div className="col-md-5">
                                <div className="bg-light rounded shadow-lg border p-3">
                                    <h5 className="fw-bold mb-3 text-uppercase text-center fs-4">Course Information</h5>
                                    <hr />
                                    <div className="d-flex justify-content-between">
                                        <span className="text-muted fs-4">Lectures:</span>
                                        <span className="fw-semibold fs-4">6 sessions (1 per week)</span>
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
                            This course introduces the fundamentals of robot design, programming, and problem-solving using real robotic kits. Students will learn how to build mechanical structures, wire sensors, and program their robots using VEXcode Blocks or Python.
                            Through teamwork and guided challenges, students will strengthen both their engineering mindset and collaboration skills, preparing them for STEM competitions and real-world engineering applications.
                        </p>
                    </div>
                </section>

                <section className="py-4">
                    <div className="container text-center">
                        <h3 className="fw-bold mb-4 text-dark">What You’ll Learn</h3>
                        <div className="row g-4 mb-4">
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-gear fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Mechanical Design</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-code-slash fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Robotics Programming</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-cpu fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Sensors & Automation</h5>
                                </div>
                            </div>
                        </div>

                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-bug fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Problem-Solving & Debugging</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-people-fill fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Team Collaboration</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-trophy fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">STEM Challenge Application</h5>
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
                                        Week 1: Introduction to VEX IQ & Robotics Concepts
                                    </button>
                                </h2>
                                <div id="week1" className="accordion-collapse collapse show" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Overview of VEX IQ parts, sensors, and motors</li>
                                        <li>Explore how robots move and sense their surroundings</li>
                                        <li>Build your first simple drive base (2-motor robot)</li>
                                        <li>Learn basic motion commands in VEXcode Blocks</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week2">
                                        Week 2: Robot Movement and Control
                                    </button>
                                </h2>
                                <div id="week2" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Understand drivetrain configuration and turning mechanics</li>
                                        <li>Use wait, loop, and if blocks for basic control logic</li>
                                        <li>Challenge: Navigate a maze using drive and turn blocks</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week3">
                                        Week 3: Sensors and Smart Functions
                                    </button>
                                </h2>
                                <div id="week3" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Learn to use the Distance Sensor, Touch Sensor, and Color Sensor</li>
                                        <li>Build autonomous behaviors (e.g., stop when object detected)</li>
                                        <li>Mini project: Line-following or object-detection robot</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week4">
                                        Week 4: Advanced Programming & Logic
                                    </button>
                                </h2>
                                <div id="week4" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Introduce variables and loops for precision control</li>
                                        <li>Calibrate robot movement and practice proportional driving</li>
                                        <li>Challenge: Deliver an object from one zone to another</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week5">
                                        Week 5: Engineering Design Challenge
                                    </button>
                                </h2>
                                <div id="week5" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Brainstorm and plan robot functions for a specific task</li>
                                        <li>Apply engineering design process (plan → build → test → improve)</li>
                                        <li>Start working on a Mini Robotics Challenge Project</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week6">
                                        Week 6: Final Competition & Presentation
                                    </button>
                                </h2>
                                <div id="week6" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Compete in a friendly in-class robotics challenge</li>
                                        <li>Demonstrate teamwork, coding strategy, and mechanical innovation</li>
                                        <li>Present your design, explain improvements, and share key takeaways</li>
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

export default VEX;