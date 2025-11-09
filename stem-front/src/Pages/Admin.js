import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Admin() {
    const [submissions, setSubmissions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn !== "true") {
            navigate("/Login", { replace: true });
        }
    }, [navigate]);

    useEffect(() => {
        window.history.pushState(null, "", window.location.href);
        window.onpopstate = () => {
            navigate("/Login", { replace: true });
        };
    }, [navigate]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
            .get("http://localhost:8080/stem/contact", {
                headers: {
                    Authorization: token ? `Bearer ${token}` : "",
                },
            })
            .then((res) => {
                setSubmissions(res.data);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    }, []);

    return (
        <div className="container py-5">
            <h2 className="fw-bold text-center mb-4" style={{ color: "#0dcaf0" }}>Admin Panel</h2>

            <div className="card shadow p-4" style={{ borderRadius: "15px" }}>
                <h4 className="fw-bold mb-3">Contact Form Submissions</h4>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th style={{ width: "5%" }}>#</th>
                            <th style={{ width: "20%" }}>Name</th>
                            <th style={{ width: "25%" }}>Email</th>
                            <th style={{ width: "50%" }}>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submissions.map((item, index) => {
                            const { id, firstName, lastName, email, message} = item;
                            return(
                                <tr key={id}>
                                <th scope="row">{index + 1}</th>
                                <td>{firstName} {lastName}</td>
                                <td>{email}</td>
                                <td>{message}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Admin;