import React from "react";
import "./style.css";

function AboutPage() {
    return <section className="about-section">
        {/* <h1>About Me</h1> */}
        <img src="../../assets/images/about-image.png" alt="Win Pomerantz Headshot"
            className="about-banner" />
        <section className="about-text">
            <h2>Software Engineer, Marketer, Lifelong Student</h2>
            <p className="centered">
                I'm Win Pomerantz, a former marketer turned full-stack web developer. After over seven years at leading companies like Charles Schwab, 
                Ubisoft, and eBay, where I honed a deep understanding of customer engagement and narrative crafting, I've pivoted to software engineering. 
                I hold a bachelor's degree from Emory University and an MBA from UC Berkeley's Haas School of Business. Currently, I am enhancing my 
                technical toolkit at the UC Berkeley Coding Bootcamp, focusing on building scalable, user-friendly web applications. With a passion for 
                merging creative insights with robust technical solutions, I am eager to develop web experiences that are not only functional but also engaging.
            </p>
        </section>
    </section>
}

export default AboutPage;