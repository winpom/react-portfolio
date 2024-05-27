import React from "react";
import "./style.css";

function ResumePage() {
    const downloadResume = () => {
        const anchor = document.createElement("a");
        anchor.href = "/assets/Win-Pomerantz-Resume.pdf";
        anchor.download = "Win-Pomerantz-Resume.pdf";
        anchor.click();
    };

    return (
        <section className="resume-section">
            <button onClick={downloadResume} className="download-button">Download Resume as PDF</button>
            <h1>My Resume</h1>
            <div className="resume-content">
                <h1><strong>WIN POMERANTZ</strong></h1>
                <h3>Phone: (415) 710-5570 | Email: <a href="mailto:Win.Pomerantz@gmail.com">Win.Pomerantz@gmail.com</a> | San Francisco, CA<br></br>
                LinkedIn: <a href="https://www.linkedin.com/in/Win-Pomerantz">/Win-Pomerantz</a> | Portfolio: <a href="https://WinPom.github.io">WinPom.github.io</a> | GitHub: <a href="https://github.com/winpom">/winpom</a></h3>
                <p>
                    Full Stack Web Developer with a robust background in brand and digital marketing. Recently completed a certificate in Full Stack Web Development from University of California, Berkeley, bringing expertise in JavaScript, React, Node.js, and other modern web technologies. Known for creativity, teamwork, executing projects from ideation to deployment, and a strong sense of humor. Lifelong student, fast learner, team player.
                </p>
                <h2>TECHNICAL SKILLS</h2>
                <p>Languages/Frameworks: JavaScript (ES6+), HTML5, CSS3, React, Node.js, Express, Handlebars, jQuery</p>
                <p>Databases: MongoDB, MySQL, SQL, NoSQL</p>
                <p>Additional Skills: Agile Development, Mobile-First Design, Cross-Functional Collaboration, UI/UX Design, Certified ScrumMaster, Adobe Photoshop</p>
                <h2>PROJECTS</h2>
                <p><strong>The Doggy Dog Breed Quiz</strong> | GitHub Repository | Deployed Project</p>
                <ul>
                    <li>Summary: A fun online quiz for suggesting dog breeds based on user input</li>
                    <li>Role: Project Lead, Front End & Back End</li>
                    <li>Tools: HTML, CSS, JavaScript, Bootstrap</li>
                </ul>
                <p><strong>WeatherApp</strong> | GitHub Repository | Deployed Project</p>
                <ul>
                    <li>Summary: Weather app that provides current and future weather forecasts in cities.</li>
                    <li>Tools: HTML, CSS, JavaScript, jQuery, API, Bootstrap, Font Awesome</li>
                </ul>
                <p><strong>Personal Blog</strong> | GitHub Repository | Deployed Project</p>
                <ul>
                    <li>Summary: A blog site that allows the user to create new posts that are saved in the local storage. No starter code, completed by using skills from class</li>
                    <li>Tools: JavaScript, HTML, CSS</li>
                </ul>
                <h2>EXPERIENCE</h2>
                <p><strong>Marketing Consultant – Multiple Clients</strong></p>
                <p>Sia Partners (Consulting) Nov 2021 – Apr 2023 San Francisco, CA</p>
                <ul>
                    <li>Directed strategy and execution for the new Prologis marketplace brand and identified opportunities for brand expansion.</li>
                    <li>Collaborated with cross-functional teams; launched a new marketplace website, working closely with developers, product managers, and executives.</li>
                </ul>
                <p>Prologis (Commercial Real Estate)</p>
                <ul>
                    <li>Designed marketing strategies, budgets, and tactics for eBay's focus categories.</li>
                    <li>Enhanced quarterly marketing strategies by improving internal processes.</li>
                    <li>Led end-to-end campaign execution, resulting in record new signups.</li>
                    <li>Managed partnerships with banks and other stakeholders and identified new opportunities.</li>
                </ul>
                <p><strong>MBA Marketing Intern</strong></p>
                <p>Ridepanda (eBikes) Jun 2020 – Sep 2020 San Francisco, CA</p>
                <ul>
                    <li>Pioneered Ridepanda's inaugural marketing strategy, defined brand identity, and identified target audiences through AB testing and research.</li>
                    <li>Achieved a milestone of 100 customers before the official launch, enabling successful fundraising efforts.</li>
                </ul>
                <p><strong>Digital Marketing Coordinator</strong></p>
                <p>Ubisoft Inc. (Video Game Publisher) Aug 2018–Jul 2019 San Francisco, CA</p>
                <ul>
                    <li>Introduced and executed digital marketing strategies that led to record in-game purchases for Ubisoft’s flagship title.</li>
                    <li>Presented brand positioning to stakeholders to build marketing plan alignment.</li>
                    <li>Managed the digital content creative process from concept to execution for top titles.</li>
                </ul>
                <h2>EDUCATION</h2>
                <p><strong>Certificate, Full Stack Web Development </strong>– University of California, Berkeley, June 2024</p>
                <p><strong>Master of Business Administration, Marketing </strong>– University of California, Berkeley, May 2021</p>
                <p><strong>Bachelor of Business Administration </strong>– Emory University, May 2014</p>
                <p><strong>Study Abroad </strong>– Copenhagen Business School, Fall Semester, 2013</p>
            </div>
        </section>
    );
}

export default ResumePage;