import React from "react";
import { motion } from "framer-motion";
import p21 from "../Image/p21.png";
import p26 from "../Image/p26.jpg";

function Scratch() {
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
                            backgroundImage: `url(${p21})`,
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
                            <div className="display-2 fw-bold">Scratch</div>
                        </div>
                    </div>
                </section>

                <section className="py-4">
                    <div className="container-fluid px-7">
                        <div className="row align-items-center">

                            <div className="col-md-7 text-center">
                                <div className="ratio ratio-21x9 rounded shadow-sm overflow-hidden">
                                    <img src={p26} style={{ objectFit: "cover" }} />
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
                                        <span className="fw-semibold fs-4">1.5 hours per session</span>
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
                            Through interactive storytelling, animation, and simple games, students will grasp the core principles of programming logic without writing a single line of code.
                            This course encourages imagination and problem-solving by letting students build their own characters, control movements, and add sound effects.
                        </p>
                    </div>
                </section>

                <section className="py-4">
                    <div className="container text-center">
                        <h3 className="fw-bold mb-4 text-dark">What You’ll Learn</h3>
                        <div className="row g-4 mb-4">
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-bricks fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Block-Based Coding</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-film fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Animation & Storytelling</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-lightning fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Event Control</h5>
                                </div>
                            </div>
                        </div>

                        <div className="row g-4 justify-content-center">
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-controller fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Game Design Basics</h5>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card border shadow-sm p-4 h-100">
                                    <i className="bi bi-music-note-beamed fs-1 text-info mb-3"></i>
                                    <h5 className="fw-semibold">Sound & Motion Effects</h5>
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
                                        Week 1: Introduction to Scratch
                                    </button>
                                </h2>
                                <div id="week1" className="accordion-collapse collapse show" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Understand the Scratch interface: stage, sprites, and scripts area</li>
                                        <li>Explore how blocks fit together</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week2">
                                        Week 2: Storytelling with Animation
                                    </button>
                                </h2>
                                <div id="week2" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Learn about motion, looks, and sound blocks</li>
                                        <li>Build an animated short story using characters and dialogues</li>
                                        <li>Add background music and scene transitions</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week3">
                                        Week 3: Events and Interactions
                                    </button>
                                </h2>
                                <div id="week3" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Use event and control blocks (“when clicked,” “if…then,” “repeat”)</li>
                                        <li>Create interactive scenes that respond to user input (e.g., clicking or key presses)</li>
                                        <li>Develop a talking pet simulator</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week4">
                                        Week 4: Game Logic and Variables
                                    </button>
                                </h2>
                                <div id="week4" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Understand variables, loops, and conditions</li>
                                        <li>Create a scoring system and timers</li>
                                        <li>Build a simple catching game using sprites and random motion</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week5">
                                        Week 5: Advanced Features
                                    </button>
                                </h2>
                                <div id="week5" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Introduce custom blocks and clones</li>
                                        <li>Work with broadcast messages for multi-scene coordination</li>
                                        <li>Design a maze game with background transitions</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#week6">
                                        Week 6: Final Project: Design & Showcase
                                    </button>
                                </h2>
                                <div id="week6" className="accordion-collapse collapse" data-bs-parent="#Outline">
                                    <ul className="accordion-body mx-3">
                                        <li>Plan and create your own Scratch project (story or game)</li>
                                        <li>Present and share projects with classmates</li>
                                        <li>Receive feedback and reflect on creativity and coding progress</li>
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

export default Scratch;