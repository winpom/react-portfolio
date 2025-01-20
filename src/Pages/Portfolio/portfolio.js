import React from "react";
import "./style.css";

function PortfolioPage() {
    const projects = [
        {
            title: "Alexia Home Designs",
            image: "/assets/images/portfolio-icons/alexia-home-designs.png",
            deployedLink: "https://www.alexiahomedesigns.com/",
        },
        {
            title: "ReadyCheck",
            image: "/assets/images/portfolio-icons/readycheck.png",
            deployedLink: "https://ready-check.onrender.com/",
            githubLink: "https://github.com/jasongalas/ready-check"
        },
        {
            title: "Dog Breed Quiz",
            image: "/assets/images/portfolio-icons/dog-breed-quiz.png",
            deployedLink: "https://zachariahkb.github.io/dog-breed-quiz/",
            githubLink: "https://github.com/ZachariahKB/dog-breed-quiz"
        },
        {
            title: "Text Editor",
            image: "/assets/images/portfolio-icons/text-editor.png",
            deployedLink: "https://text-editor-4fwj.onrender.com/",
            githubLink: "https://github.com/winpom/text-editor"
        },
        {
            title: "Weather Dashboard",
            image: "/assets/images/portfolio-icons/weather-dash.png",
            deployedLink: "https://winpom.github.io/weather-dashboard/",
            githubLink: "https://github.com/winpom/weather-dashboard"
        },
        {
            title: "The Regal Dog Blog",
            image: "/assets/images/portfolio-icons/regal-dog.png",
            deployedLink: "https://winpom.github.io/personal-blog-challenge/",
            githubLink: "https://github.com/winpom/personal-blog-challenge"
        },
        {
            title: "Payroll Tracker",
            image: "/assets/images/portfolio-icons/payroll-tracker.png",
            deployedLink: "https://winpom.github.io/payroll-tracker/",
            githubLink: "https://github.com/winpom/payroll-tracker"
        },
    ];

    return (
        <section className="portfolio-section" id="portfolio">
            <h1>My Portfolio</h1>
            <h2>Here are a few projects I'm proud of:</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="image-container">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="overlay">
                                <div className="project-links">
                                    <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
                                </div>
                                <div className="project-links">
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PortfolioPage;
