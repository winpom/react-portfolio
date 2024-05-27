import React from "react";
import "./style.css";

function PortfolioPage() {
    const projects = [
        {
            title: "Dog Breed Quiz",
            image: "/assets/images/dog-breed-quiz.png",
            deployedLink: "https://zachariahkb.github.io/dog-breed-quiz/",
            githubLink: "https://github.com/ZachariahKB/dog-breed-quiz"
        },
        {
            title: "Text Editor",
            image: "/assets/images/JATE.png",
            deployedLink: "https://text-editor-4fwj.onrender.com/",
            githubLink: "https://github.com/winpom/text-editor"
        },
        {
            title: "Weather Dashboard",
            image: "/assets/images/weather-dash.png",
            deployedLink: "https://winpom.github.io/weather-dashboard/",
            githubLink: "https://github.com/winpom/weather-dashboard"
        },
        {
            title: "The Regal Dog Blog",
            image: "/assets/images/regal-dog.jpg",
            deployedLink: "https://winpom.github.io/personal-blog-challenge/",
            githubLink: "https://github.com/winpom/personal-blog-challenge"
        },
        {
            title: "Payroll Tracker",
            image: "/assets/images/payroll-tracker.png",
            deployedLink: "https://winpom.github.io/payroll-tracker/",
            githubLink: "https://github.com/winpom/payroll-tracker"
        },
    ];

    return (
        <section className="portfolio-section">
            <h1>My Portfolio</h1>
            <h3>Here are a few projects I'm proud of!</h3>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h2>{project.title}</h2>
                        <div className="image-container">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="overlay">
                                <div className="project-links">
                                    <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
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
