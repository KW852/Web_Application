import React from "react";
import { FaRegLightbulb, FaUsers, FaWebAwesome } from "react-icons/fa6";
import p14 from "../Image/p14.jpg";
import p15 from "../Image/p15.jpg";
import { motion } from "framer-motion";

function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <>
                <section className="bg-light">
                    <div
                        className="text-white text-center py-5 position-relative"
                        style={{
                            backgroundImage: `url(${p14})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            minHeight: "400px",
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
                            <div className="display-2 fw-bold">About Us</div>
                        </div>
                    </div>
                </section>

                <section className="py-4 bg-white">
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-md-6">
                                <div className="bg-light rounded shadow-sm p-4 mb-4">
                                    <h1 className="fw-bold text-center mb-3">Our Mission</h1>
                                    <p className="text-center fs-5">To empower students through hands-on learning in science, technology, engineering, and mathematics. We aim to inspire the next generation of innovators by making education practical, exciting, and accessible.</p>
                                </div>

                                <div className="bg-light rounded shadow-sm p-4 ">
                                    <h1 className="fw-bold text-center mb-3">Our Vision</h1>
                                    <p className="text-center fs-5">We envision a world where every young mind is equipped with the skills and curiosity to shape the future. Through collaborative learning and real-world experiences, we strive to create leaders who make meaningful impact.</p>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="d-flex justify-content-center">
                                    <img src={p15} style={{ maxHeight: "600px", objectFit: "cover" }} className="img-fluid rounded shadow-lg" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="bg-light">
                    <div className="container-fliud">
                        <div className="text-center fw-bold display-5 mb-5 pt-3">Our Core Values</div>
                        <div className="row text-center px-5">

                            <div className="col-md-4">
                                <div className="d-flex justify-content-center mb-3">
                                    <FaRegLightbulb style={{ color: "#00d8ff" }} size={100} />
                                </div>
                                <h1 className="fw-bold">Innovation</h1>
                                <p className="fs-5">We believe in nurturing curiosity and encouraging creative thinking. Every idea has the potential to spark meaningful change.</p>
                            </div>

                            <div className="col-md-4">
                                <div className="d-flex justify-content-center mb-3">
                                    <FaUsers style={{ color: "#00d8ff" }} size={100} />
                                </div>
                                <h1 className="fw-bold">Collaboration</h1>
                                <p className="fs-5">Great achievements stem from teamwork. We value every voice and foster a culture of shared success.</p>
                            </div>

                            <div className="col-md-4">
                                <div className="d-flex justify-content-center mb-3">
                                    <FaWebAwesome style={{ color: "00d8ff" }} size={100} />
                                </div>
                                <h1 className="fw-bold">Impact</h1>
                                <p className="fs-5">We are driven by purpose. Our work aims to inspire, empower, and make a difference in the communities we serve.</p>
                            </div>

                        </div>
                    </div>
                </section>

                <section>

                </section>
            </>
        </motion.div>
    );
}

export default About;