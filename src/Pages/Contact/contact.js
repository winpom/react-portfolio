import React, { useState } from "react";
import "./style.css";

function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errorMessage, setErrorMessage] = useState("");
    const { name, email, message } = formState;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errorMessage) {
            alert("Submit Form");
            console.log("submit form", formState);
        }
    };

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "email") {
            const isValid = validateEmail(value);
            if (!isValid) {
                setErrorMessage("Email invalid");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!value.length) {
                setErrorMessage(`Message is required.`);
            } else {
                setErrorMessage("");
            }
        }

        // Update the formState regardless of validation result
        setFormState({ ...formState, [name]: value });
    };

    return (
        <section className="contact-section">
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} className="form-control" />
                </div>
                {errorMessage && (
                    <div className="error-message">
                        <p>{errorMessage}</p>
                    </div>
                )}
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </section>
    );
}

export default ContactPage;
