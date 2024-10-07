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
                I'm Win Pomerantz, a full-stack web developer with a passion for creating scalable, user-friendly web applications. 
                After completing an intensive coding bootcamp at UC Berkeley, I have gained hands-on experience with modern web 
                technologies like JavaScript, React, Node.js, and MongoDB. This has enabled me to pivot into software engineering 
                after over seven years working in marketing at leading companies such as Charles Schwab, Ubisoft, and eBay, where 
                I developed a deep understanding of customer engagement and storytelling.
                <br />                
                <br />
                I hold a bachelor's degree from Emory University and an MBA from UC Berkeley's Haas School of Business. 
                Having recently moved to Haarlem to join my partner and pursue the next chapter of my career, I am eager to bring 
                my blend of creative thinking, technical skills, and business acumen to new challenges. My goal is to build web 
                experiences that are not only highly functional but also engaging and meaningful to users.
            </p>
        </section>
    </section>
}

export default AboutPage;