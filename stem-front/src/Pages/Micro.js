import React from "react";
import { motion } from "framer-motion";
import p19 from "../Image/p19.jpg";
import p18 from "../Image/p18.jpg";

function Micro() {
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
                            backgroundImage: `url(${p19})`,
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
                            <div className="display-2 fw-bold">Micro:Bit</div>
                        </div>
                    </div>
                </section>

                <section className="py-4">
                    <div className="container-fluid px-7">
                        <div className="row align-items-center">

                            <div className="col-md-7 text-center">
                                <div className="ratio ratio-21x9 rounded shadow-sm overflow-hidden">
                                    <img src={p18} style={{ objectFit: "cover" }} />
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
                                        <span className="fw-semibold fs-4">Beginner</span>
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
                            Discover the joy of hands-on coding and electronics with BBC Micro:bit!
                            In this course, students will learn to build interactive devices using sensors, LEDs, and creative coding.
                        </p>
                    </div>
                </section>

                <section className="py-4">
                    <div className="container text-center">
                        <h3 className="fw-bold mb-4 text-dark">What You’ll Learn</h3>
                        <div className="row g-4">
                            <div className="col-md-3">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-cpu fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Microcontroller Basics</h5>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-code-slash fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Code with MakeCode</h5>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-lightning fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Build Circuits with Sensors</h5>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-stars fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Create Interactive Projects</h5>
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
                                        Week 1: Introduction to Micro:bit
                                    </button>
                                </h2>
                                <div id="week1" className="accordion-collapse collapse show" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Understand what Micro:bit is and its hardware components (LED matrix, buttons, sensors, pins)</li>
                                        <li>Explore the MakeCode environment and interface</li>
                                        <li>Learn basic coding blocks: show text, show icon, and forever loop</li>
                                        <li>Create your first interactive name tag with LED scrolling text</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week2">
                                        Week 2: Sensors & Inputs
                                    </button>
                                </h2>
                                <div id="week2" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Explore built-in sensors: accelerometer, light, and temperature sensor</li>
                                        <li>Use “if…then” logic to trigger LED patterns when sensors are activated</li>
                                        <li>Build a simple “reaction timer” or “shake-to-display” game</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week3">
                                        Week 3: Coding Logic & Loops
                                    </button>
                                </h2>
                                <div id="week3" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Understand conditionals, variables, and loops</li>
                                        <li>Apply logical thinking to control multiple events</li>
                                        <li>Learn about random numbers for creative coding</li>
                                        <li>Create a “digital dice” and “score counter” game project</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week4">
                                        Week 4: Radio Communication
                                    </button>
                                </h2>
                                <div id="week4" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Learn about Micro:bit’s wireless radio feature</li>
                                        <li>Send and receive messages between multiple Micro:bits</li>
                                        <li>Build a wireless chat tool or two-player game</li>
                                        <li>Discuss real-world IoT applications (smart home, walkie-talkie concept)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week5">
                                        Week 5: Connecting External Components
                                    </button>
                                </h2>
                                <div id="week5" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Learn about Micro:bit pins and external circuit connection</li>
                                        <li>Connect LEDs, buzzers, and servo motors</li>
                                        <li>Understand analog vs digital signals</li>
                                        <li>Build a light-sensitive lamp or temperature alert system</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week6">
                                        Week 6: Final Project & Showcase
                                    </button>
                                </h2>
                                <div id="week6" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Brainstorm and plan your own Micro:bit project idea</li>
                                        <li>Apply all concepts: inputs, sensors, logic, and radio communication</li>
                                        <li>Develop, test, and refine your prototype</li>
                                        <li>Present your project to the class and share your learning journey</li>
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

export default Micro;