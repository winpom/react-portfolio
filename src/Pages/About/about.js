import React from "react";
import "./style.css";

function AboutPage() {
    return <section className="about-section">
        <h1>About Me</h1>
        <img src="../../assets/images/win-headshot-circle.png" alt="Win Pomerantz Headshot"
            className="headshot" />
        <h2>Software Engineer, Marketer, Lifelong Student</h2>
        <p className="centered">
            I'm Win Pomerantz, a marketer turned aspiring web developer. With over seven years
            of experience in brand and digital marketing at companies like Charles Schwab, Ubisoft, and eBay, I've
            developed a strong understanding of the customer, enabling me to better craft engaging narratives and user experiences.
            With a bachelors degree from Emory University and MBA from UC Berkeley's Haas School of Business,
            I'm currently diving into the world of coding through the full-time UC Berkeley Coding Bootcamp.
            I'm passionate about blending creativity with technical skills to build captivating web experiences.
        </p>
        <p className="centered"> Join me as I transition from marketing to coding and explore the exciting intersection of art and technology! </p>
    </section>
}

export default AboutPage;