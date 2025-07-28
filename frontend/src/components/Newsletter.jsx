import React, {useEffect, useState} from "react";
import '../styles/Newsletter.scss';

function Newsletter() {

    const buttonText = "Subscribe";
    const title = "Sign up for our Newsletter";
    const [email, setEmail] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const saveEmail = () => {
        if (!email.trim()) {
            return;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert(`You've signed up for our newsletter with email "${email}"!`);
    }

    return (
        <div className="newsletter-container">
        <div className="newsletter-title">{title}</div>
        <div className="newsletter">
        <input className="input" value={email} onChange={handleEmailChange} placeholder="Insert your email"/>
        <div className="button" onClick={saveEmail}>{buttonText}</div>
        </div>
        </div>
    );
}

export default Newsletter;