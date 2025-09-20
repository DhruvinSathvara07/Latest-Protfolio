import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = new FormData(event.target);
        formData.append("access_key", "362ae610-0194-4a54-b7bb-d8daabe76954");
        formData.append("replyto", formData.get("email"));
        formData.append("subject", "New Contact Form Submission - Portfolio");

        try {
            const response = await axios.post(
                "https://api.web3forms.com/submit",
                formData
            );

            if (response.data.success) {
                toast.success("Form submitted successfully!");
                event.target.reset();
            } else {
                toast.error("Something went wrong. Try again!");
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to send. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="container mt-5">
                <h2
                    style={{
                        fontFamily: "Playwrite AU SA, serif",
                        borderBottom: "2px solid #94E214",
                        display: "inline-block",
                    }}
                    className="mt-0 mt-lg-5"
                    data-aos="fade-down"
                >
                    <span className="about">Contact </span>
                    <span className="me">Me</span>
                </h2>

                <div className="row mt-5">
                    <div className="col-lg-6">
                        <div className="container" data-aos="fade-up">
                            <img
                                src={"userWithLaptop.png"}
                                className="img-fluid animation"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="row py-4" data-aos="fade-up">
                            <h1
                                className="inline-block ms-3 text-white"
                                data-aos="fade-left"
                            >
                                <em
                                    style={{
                                        fontFamily: "Playwrite AU SA, serif",
                                        borderBottom: "2px solid #94E214",
                                    }}
                                >
                                    Let's Get In{" "}
                                    <span
                                        style={{ color: "#94E214", borderBottom: "2px solid white" }}
                                    >
                                        Touch...
                                    </span>
                                </em>
                            </h1>

                            <div className="col-lg-12">
                                <form onSubmit={onSubmit}>
                                    <div className="form-floating mb-3 text-dark" data-aos="flip-left">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Enter your name"
                                            required
                                        />
                                        <label>Name</label>
                                    </div>

                                    <div className="form-floating mb-3 text-dark" data-aos="flip-left">
                                        <input
                                            type="text"
                                            name="contact"
                                            className="form-control"
                                            placeholder="Enter Contact Number"
                                            required
                                        />
                                        <label>Contact Number</label>
                                    </div>

                                    <div className="form-floating mb-3 text-dark" data-aos="flip-left">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="name@example.com"
                                            required
                                        />
                                        <label>Email address</label>
                                    </div>

                                    <div className="form-floating text-dark" data-aos="flip-left">
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            placeholder="Leave a comment here"
                                            style={{ height: "100px" }}
                                            required
                                        ></textarea>
                                        <label>Comments</label>
                                    </div>

                                    <div className="mt-3">
                                        <button type="submit" className="btn hireMe" disabled={loading}>
                                            {loading ? "Sending..." : "Submit"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toast Container */}
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
};

export default Contact;
