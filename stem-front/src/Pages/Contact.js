import React, { useState } from "react";
import p17 from "../Image/p17.jpg"
import { motion } from "framer-motion";
import axios from "axios";


function Contact() {
    const [formData, setFormData] = useState({
        lastName: "",
        firstName: "",
        email: "",
        message: ""
    });

    const { lastName, firstName, email, message } = formData;

    const onInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post("http://localhost:8080/stem/contact", formData);
            alert("Message sent successfully!");
            setFormData({
                lastName: "",
                firstName: "",
                email: "",
                message: ""
            });
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please try again later.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >

            <div className="container-fliud d-flex align-items-center justify-content-center p-5"
                style={{
                    minHeight: "80vh",
                    backgroundImage: `url(${p17})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    position: "relative",
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

                <div className="row w-100 justify-content-center" style={{ zIndex: 2 }}>
                    <div className="col-md-7 bg-light p-4 rounded shadow-sm mb-4">
                        <h3>SEND A MESSAGE</h3>
                        <p>Your email address will not be published</p>
                        <form onSubmit={onSubmit}>
                            <div className="row mb-3">
                                <div className="col">
                                    <input type="text"
                                        name="lastName"
                                        className="form-control"
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={onInputChange}
                                        required />
                                </div>
                                <div className="col">
                                    <input type="text"
                                        name="firstName"
                                        className="form-control"
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={onInputChange}
                                        required />
                                </div>
                            </div>

                            <div className="mb-3">
                                <input type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={email}
                                    onChange={onInputChange}
                                    required />
                            </div>

                            <div className="mb-3">
                                <textarea name="message"
                                    className="form-control"
                                    placeholder="Message"
                                    rows="5"
                                    value={message}
                                    onChange={onInputChange}
                                    required />
                            </div>

                            <button className="btn btn-info rounded-0 btn-lg w-100" type="submit" disabled={loading}>
                                {loading ? "Sending..." : "Submit"}
                            </button>
                        </form>
                    </div>

                    <div className="col-md-4">
                        <div className="bg-light p-4 rounded shadow-sm">
                            <h3 className="mb-3">CONTACT US</h3>
                            <p>Welcome to our website. Feel free to contact us any time.</p>

                            <div className="d-flex align-items-center bg-white p-3 rounded mb-3">
                                <i className="bi bi-envelope-fill text-info fs-4 me-3"></i>
                                <div>info@stem.com</div>
                            </div>

                            <div className="d-flex align-items-center bg-white p-3 rounded mb-3">
                                <i className="bi bi-telephone-fill text-info fs-4 me-3"></i>
                                <div>+852 98765432</div>
                            </div>

                            <div className="d-flex align-items-center bg-white p-3 rounded">
                                <i className="bi bi-geo-alt-fill text-info fs-4 me-3"></i>
                                <div>Hung Hom</div>
                            </div>

                        </div>
                    </div>

                </div>


            </div>
        </motion.div>
    );
}

export default Contact;