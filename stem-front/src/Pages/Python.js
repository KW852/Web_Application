import React from "react";
import { motion } from "framer-motion";
import p22 from "../Image/p22.jpg";
import p27 from "../Image/p27.jpg";

function Python() {
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
                            backgroundImage: `url(${p22})`,
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
                            <div className="display-2 fw-bold">Python</div>
                        </div>
                    </div>
                </section>

                <section className="py-4">
                    <div className="container-fluid px-7">
                        <div className="row align-items-center">

                            <div className="col-md-7 text-center">
                                <div className="ratio ratio-21x9 rounded shadow-sm overflow-hidden">
                                    <img src={p27} style={{ objectFit: "cover" }} />
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
                            Through hands-on exercises, they’ll explore real programming concepts like variables, loops, conditions, and functions, while applying them to creative mini-projects such as calculators, quiz apps, or simple games.
                            By the end of the course, students will not only understand how computers “think,” but also gain the confidence to start solving problems and automating tasks through code.
                        </p>
                    </div>
                </section>

                <section className="py-4">
                    <div className="container text-center">
                        <h3 className="fw-bold mb-4 text-dark">What You’ll Learn</h3>
                        <div className="row g-4 mb-4">
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-terminal fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Python Basics</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-123 fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Variables & Operators</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-diagram-3 fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Conditional Statements</h5>
                                </div>
                            </div>
                        </div>

                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-arrow-repeat fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Loops & Functions</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-stack fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Lists & Data Structures</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-code-slash fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Mini Projects</h5>
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
                                        Week 1: Introduction to Python
                                    </button>
                                </h2>
                                <div id="week1" className="accordion-collapse collapse show" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Learn what Python is and why it’s widely used</li>
                                        <li>Set up Python and run your first program</li>
                                        <li>Understand variables and data types (integers, strings, floats)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week2">
                                        Week 2: Operators and Input
                                    </button>
                                </h2>
                                <div id="week2" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Perform arithmetic and string operations</li>
                                        <li>Use input() to let users interact with your program</li>
                                        <li>Create a personalized greeting app</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week3">
                                        Week 3: Conditional Logic
                                    </button>
                                </h2>
                                <div id="week3" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Learn if, elif, and else statements</li>
                                        <li>Combine logic with comparison and boolean operators</li>
                                        <li>Build a Grade Checker or Decision Helper</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week4">
                                        Week 4: Loops and Repetition
                                    </button>
                                </h2>
                                <div id="week4" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Explore for and while loops</li>
                                        <li>Create counting, multiplication tables, and pattern printing exercises</li>
                                        <li>Make a Number Guessing Game</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week5">
                                        Week 5: Lists, Functions, and Debugging
                                    </button>
                                </h2>
                                <div id="week5" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Store data in lists and access elements</li>
                                        <li>Write your own functions to organize code</li>
                                        <li>Learn debugging and common error handling</li>
                                        <li>Build a Quiz Program with multiple questions</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week6">
                                        Week 6: Final Project: Bringing It All Together
                                    </button>
                                </h2>
                                <div id="week6" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Combine all skills to create a final project</li>
                                        <li>Present your program to classmates and explain your logic</li>
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

export default Python;