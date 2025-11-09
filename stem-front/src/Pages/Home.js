import React from "react";
import { Link } from "react-router-dom";
import p1 from "../Image/p1.jpg";
import p2 from "../Image/p2.jpg";
import p3 from "../Image/p3.jpg";
import p4 from "../Image/p4.jpg";
import p5 from "../Image/p5.png";
import p6 from "../Image/p6.jpg";
import p7 from "../Image/p7.png";
import p8 from "../Image/p8.png";
import p9 from "../Image/p9.jpg";
import p10 from "../Image/p10.jpg";
import p11 from "../Image/p11.jpg";
import p12 from "../Image/p12.jpg";
import p13 from "../Image/p13.jpg";
import { FaRegUser, FaSchoolCircleCheck, FaClipboardCheck, FaUserGraduate } from "react-icons/fa6";
import CountUp from "react-countup";
import { motion } from "framer-motion";




function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <>
                <section className="pb-4 bg-light">
                    <div
                        className="text-white text-center py-5 position-relative"
                        style={{
                            backgroundImage: `url(${p1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            minHeight: "700px",
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
                            <h1 className="display-1 fw-bold">Empowering Future Innovators</h1>
                            <p className="fs-3 pb-5">Join our hands-on STEM workshops for primary and secondary students!</p>
                        </div>
                    </div>
                </section>

                <section className="py-4 bg-light">
                    <div className="container-fluid">
                        <div className="row align-items-center px-5">

                            <div className="col-md-6 text-center">
                                <h3 className="fw-bold mb-3">About STEM Workshop</h3>
                                <p className="custom-justify fs-4">Our STEM workshops are designed to ignite curiosity and creativity in young minds.
                                    We provide hands-on experiences in coding, robotics, and engineering tailored for both primary and secondary students.
                                    Led by passionate educators and engineers, we aim to nurture the next generation of innovators through interactive and fun learning.
                                </p>
                            </div>

                            <div className="col-md-6 text-center">
                                <img src={p2} style={{ maxHeight: "500px" }} className="img-fluid rounded shadow" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-4 bg-light">
                    <div className="text-center text-white py-5 position-relative" style={{
                        backgroundImage: `url(${p13})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        minHeight: "700px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(0,0,0,0.5)",
                                zIndex: 1,
                            }}
                        ></div>

                        <div style={{ zIndex: 2 }}>
                            <div className="display-3 fw-bold pb-3">Numbers That Speak for Our Impact</div>
                            <div className="display-5 fw-bold pb-5">We’ve Reached New Heights</div>
                            <div className="container-fluid">
                                <div className="row text-center">
                                    <div className="col-md-3 text-center px-4">
                                        <FaUserGraduate className="py-5" style={{ color: "white" }} size={200} />
                                        <h1 className="fw-bold">Professors</h1>
                                        <h1 className="text-info fw-bold py-3">
                                            <CountUp end={25000} duration={4} separator="," suffix="+" />
                                        </h1>
                                        <h1 className="fw-bold">Students Educated</h1>
                                    </div>
                                    <div className="col-md-3 text-center px-4">
                                        <FaClipboardCheck className="py-5" style={{ color: "white" }} size={200} />
                                        <h1 className="fw-bold">Completed</h1>
                                        <h1 className="text-info fw-bold py-3">
                                            <CountUp end={300} duration={4} suffix="+" />
                                        </h1>
                                        <h1 className="fw-bold">Educational Projects</h1>
                                    </div>
                                    <div className="col-md-3 text-center px-4">
                                        <FaRegUser className="py-5" style={{ color: "white" }} size={200} />
                                        <h1 className="fw-bold">Training</h1>
                                        <h1 className="text-info fw-bold py-3">
                                            <CountUp end={50} duration={4} suffix="+" />
                                        </h1>
                                        <h1 className="fw-bold">Expert Mentors</h1>
                                    </div>
                                    <div className="col-md-3 text-center px-4">
                                        <FaSchoolCircleCheck className="py-5" style={{ color: "white" }} size={200} />
                                        <h1 className="fw-bold">Service</h1>
                                        <h1 className="text-info fw-bold py-3">
                                            <CountUp end={120} duration={4} suffix="+" />
                                        </h1>
                                        <h1 className="fw-bold">Partner Schools</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="py-4 bg-light">
                    <div className="container-fliud px-5">
                        <div className="text-center display-4 fw-bold">STEM Courses</div>
                        <div className="d-flex flex-nowrap overflow-auto py-4">

                            <div className="col-md-4 mx-2">
                                <div className="card py-4 h-100">
                                    <h1 className="card-title text-center fw-bold py-2">Micro:bit</h1>
                                    <img src={p3} style={{ width: "100%", height: "200px", objectFit: "contain" }} />
                                    <p className="card-text text-center p-2 fs-4 h-100">Learn coding through hands-on microcontroller activities.</p>
                                    <Link to="/Micro" className="btn btn-info btn-lg shadow mx-5">More</Link>
                                </div>
                            </div>

                            <div className="col-md-4 mx-2">
                                <div className="card py-4 h-100">
                                    <h1 className="card-title text-center fw-bold py-2">Arduino</h1>
                                    <img src={p4} style={{ width: "100%", height: "200px", objectFit: "contain" }} />
                                    <p className="card-text text-center p-2 fs-4 h-100">Dive into hardware programming and circuit building using real-world electronics components and sensors.</p>
                                    <Link to="/Arduino" className="btn btn-info btn-lg shadow mx-5">More</Link>
                                </div>
                            </div>

                            <div className="col-md-4 mx-2">
                                <div className="card py-4 h-100">
                                    <h1 className="card-title text-center fw-bold py-2">Scratch</h1>
                                    <img src={p5} style={{ width: "100%", height: "200px", objectFit: "contain" }} />
                                    <p className="card-text text-center p-2 fs-4 h-100">Create interactive stories, games, and animations using block-based visual programming.</p>
                                    <Link to="/Scratch" className="btn btn-info btn-lg shadow mx-5">More</Link>
                                </div>
                            </div>

                            <div className="col-md-4 mx-2">
                                <div className="card py-4 h-100">
                                    <h1 className="card-title text-center fw-bold py-2">Python</h1>
                                    <img src={p6} style={{ width: "100%", height: "200px", objectFit: "contain" }} />
                                    <p className="card-text text-center p-2 fs-4 h-100">Learn one of the world’s most popular programming languages through fun, beginner-friendly projects.</p>
                                    <Link to="/Python" className="btn btn-info btn-lg shadow mx-5">More</Link>
                                </div>
                            </div>

                            <div className="col-md-4 mx-2">
                                <div className="card py-4 h-100">
                                    <h1 className="card-title text-center fw-bold py-2">MIT App Inventor</h1>
                                    <img src={p7} style={{ width: "100%", height: "200px", objectFit: "contain" }} />
                                    <p className="card-text text-center p-2 fs-4 h-100">Design and build mobile apps with a simple drag-and-drop interface — no coding experience needed.</p>
                                    <Link to="/MIT" className="btn btn-info btn-lg shadow mx-5">More</Link>
                                </div>
                            </div>

                            <div className="col-md-4 mx-2">
                                <div className="card py-4 h-100">
                                    <h1 className="card-title text-center fw-bold py-2">VEX IQ</h1>
                                    <img src={p8} style={{ width: "100%", height: "200px", objectFit: "contain" }} />
                                    <p className="card-text text-center p-2 fs-4 h-100">Build and code modular robots to complete exciting challenges in a competitive robotics environment.</p>
                                    <Link to="/VEX" className="btn btn-info btn-lg shadow mx-5">More</Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="py-4 bg-light">
                    <div className="container-fluid px-0">
                        <div id="gallery" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="false">

                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#gallery" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#gallery" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#gallery" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#gallery" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            </div>

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={p9} className="d-block w-100" style={{ height: "700px", objectFit: "cover" }} />
                                    <div className="carousel-caption d-none d-md-block bg-dark">
                                        <h1>Hands-on and eyes-on learning</h1>
                                        <p className="fs-4">Witnessing how a simple circuit comes to life.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={p10} className="d-block w-100" style={{ height: "700px", objectFit: "cover" }} />
                                    <div className="carousel-caption d-none d-md-block bg-dark">
                                        <h1>Collaboration sparks innovation</h1>
                                        <p className="fs-4">Working as a team, students put together a robotic vehicle—turning ideas into real machines.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={p11} className="d-block w-100" style={{ height: "700px", objectFit: "cover" }} />
                                    <div className="carousel-caption d-none d-md-block bg-dark">
                                        <h1>Hands-On with Smart Cars</h1>
                                        <p className="fs-4">Exploring obstacle avoidance with sensors and coding—students bring robotic vehicles to life!</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={p12} className="d-block w-100" style={{ height: "700px", objectFit: "cover" }} />
                                    <div className="carousel-caption d-none d-md-block bg-dark">
                                        <h1>Every wire connects to a new idea</h1>
                                        <p className="fs-4">Participants carefully link wires and components, exploring the logic behind smart electronics.</p>
                                    </div>
                                </div>
                            </div>

                            <button className="carousel-control-prev" type="button" data-bs-target="#gallery" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>

                            <button className="carousel-control-next" type="button" data-bs-target="#gallery" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>

                        </div>
                    </div>
                </section>

                <section className="pb-4 bg-light">
                    <div className="container">
                        <div className="text-center fw-bold display-5 text-info py-4">INFORMATION FOR TEACHERS AND STUDENTS, EVENT INFORMATION AND EDUCATION NEWS</div>
                        <div className="text-center fs-2 pb-4">ONE OF THE MOST COMPLETE EDUCATION THEME</div>
                        <div className="text-center py-4">
                            <Link to="/Contact" className="btn btn-lg btn-info fw-bold text-dark" style={{ borderRadius: "0px", padding: "15px 100px", fontSize: "1.4rem" }}>Contact US</Link>
                        </div>
                    </div>
                </section>


            </>
        </motion.div>

    );
}

export default Home;