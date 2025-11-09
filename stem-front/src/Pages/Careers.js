import React from "react";
import p16 from "../Image/p16.jpg"
import { motion } from "framer-motion";

function Careers() {
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
                            backgroundImage: `url(${p16})`,
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
                            <div className="display-2 fw-bold">Careers</div>
                        </div>
                    </div>
                </section>

                <section className="py-4">
                    <div className="container">
                        <div className="text-center display-3 fw-bold pt-4">Open Position</div>
                        <div className="text-center fs-3 pt-4">
                            <span>If you are interested in the position, please send your CV to </span>
                            <span className="text-primary text-decoration-underline">info@stem.com</span>
                        </div>

                        <div className="card shadow-lg rounded-4 border-0 my-5">
                            <div className="card-body p-5">
                                <h2 className="fw-bold mb-4 text-center">Educational Program Manager – STEM / VEX Robotics</h2>
                                <h4 className="fw-bold">Job Description:</h4>
                                <p className="fs-5">We are looking for a passionate and experienced Program Manager to lead and oversee our STEM and VEX Robotics education initiatives. You will be responsible for course planning, instructor coordination, school collaboration, and competition support.</p>

                                <h4 className="fw-bold">Job Duties:</h4>
                                <ul className="fs-5">
                                    <li>Design and enhance the curriculum for STEM / VEX Robotics programs.</li>
                                    <li>Manage and train a team of instructors.</li>
                                    <li>Plan and coordinate student competitions and hands-on learning projects.</li>
                                    <li>Develop and maintain high-quality teaching resources and materials.</li>
                                </ul>

                                <h4 className="fw-bold">Job Requirements:</h4>
                                <ul className="fs-5">
                                    <li>Bachelor’s degree or above in Education, Engineering, or a related field.</li>
                                    <li>Familiarity with platforms such as VEX, mBot, Arduino is preferred.</li>
                                    <li>Strong communication skills in both English and Chinese.</li>
                                    <li>Detail-oriented, responsible, and a strong team leader.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card shadow-lg rounded-4 border-0 my-5">
                            <div className="card-body p-5">
                                <h2 className="fw-bold mb-4 text-center">STEM Instructor – Robotics / Coding (Part-time / Full-time)</h2>
                                <h4 className="fw-bold">Job Description:</h4>
                                <p className="fs-5">We are hiring instructors to deliver engaging STEM, coding, robotics, and AI classes to primary and secondary school students. Inspire creativity and problem-solving through hands-on learning.</p>

                                <h4 className="fw-bold">Job Duties:</h4>
                                <ul className="fs-5">
                                    <li>Teach programming and robotics topics such as Scratch, micro:bit, Python, and VEX.</li>
                                    <li>Guide students in completing design projects and joining competitions.</li>
                                    <li>Prepare lesson plans and teaching materials.</li>
                                    <li>Provide feedback and support to students’ learning progress.</li>
                                </ul>

                                <h4 className="fw-bold">Job Requirements:</h4>
                                <ul className="fs-5">
                                    <li>Current university student or graduate in Engineering, IT, Education, or related field.</li>
                                    <li>Experience in teaching children or youth is an advantage.</li>
                                    <li>Familiarity with educational tools (Scratch, VEX, Arduino, etc.) is a plus.</li>
                                    <li>Passionate about technology and education.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card shadow-lg rounded-4 border-0 my-5">
                            <div className="card-body p-5">
                                <h2 className="fw-bold mb-4 text-center">Education Assistant – Robotics / STEM (Part-time)</h2>
                                <h4 className="fw-bold">Job Description:</h4>
                                <p className="fs-5">Assist instructors in classroom activities, material preparation, and basic student management. This is an excellent opportunity for students passionate about tech education.</p>

                                <h4 className="fw-bold">Job Duties:</h4>
                                <ul className="fs-5">
                                    <li>Prepare and organize teaching materials and equipment.</li>
                                    <li>Assist students during hands-on sessions and workshops.</li>
                                    <li>Provide logistical support during competitions or events.</li>
                                    <li>Help with lesson planning or teaching material editing.</li>
                                </ul>

                                <h4 className="fw-bold">Job Requirements:</h4>
                                <ul className="fs-5">
                                    <li>Diploma or above, preferably in STEM or Education-related fields.</li>
                                    <li>Strong willingness to learn and support educational activities.</li>
                                    <li>Basic computer literacy (Word / Excel / Google Workspace).</li>
                                </ul>
                            </div>
                        </div>

                        <div className="card shadow-lg rounded-4 border-0 my-5">
                            <div className="card-body p-5">
                                <h2 className="fw-bold mb-4 text-center">AI Curriculum Developer – STEM Education</h2>
                                <h4 className="fw-bold">Job Description:</h4>
                                <p className="fs-5">We’re seeking a creative and technically skilled curriculum developer to design beginner-friendly AI courses for K-12 students. You’ll help bridge the gap between AI and education through engaging content and activities.</p>

                                <h4 className="fw-bold">Job Duties:</h4>
                                <ul className="fs-5">
                                    <li>Develop AI-related teaching materials (e.g., Teachable Machine, Python, YOLO).</li>
                                    <li>Design interactive lessons and tools for AI learning.</li>
                                    <li>Conduct teacher training sessions to ensure effective delivery.</li>
                                    <li>Integrate AI concepts into existing STEM curriculum modules.</li>
                                </ul>

                                <h4 className="fw-bold">Job Requirements:</h4>
                                <ul className="fs-5">
                                    <li>Degree in Computer Science, AI, Education, or related fields.</li>
                                    <li>Familiar with tools like TensorFlow, Teachable Machine, YOLO, or OpenCV.</li>
                                    <li>Prior experience in curriculum development or teaching is preferred.</li>
                                    <li>Strong creativity, independence, and teamwork skills.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>


            </>
        </motion.div>
    );
}

export default Careers;