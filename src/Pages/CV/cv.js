import React from "react";
import "./style.css";

function ResumePage() {
    const downloadResume = () => {
        const anchor = document.createElement("a");
        anchor.href = "/assets/Win-Pomerantz-Resume.pdf";
        anchor.download = "Win-Pomerantz-CV.pdf";
        anchor.click();
    };

    return (
        <section className="resume-section">
            <h1>My CV</h1>
            <div className="button-container">
                <button onClick={downloadResume} className="download-button">Download CV as PDF</button>
            </div>
            <section className="proficiencies">
                <div className="proficiency-list">
                    <h3>Front-end Proficiencies</h3>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Responsive design</li>
                        <li>React</li>
                        <li>Handlebars</li>
                    </ul>
                </div>
                <div className="proficiency-list">
                    <h3>Back-end Proficiencies</h3>
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </section>
            <section className="increased-padding">
                {/* <h1 className="increased-margins">Full Resume</h1> */}
                <div className="resume-content">
                    <h1><strong>WIN POMERANTZ</strong></h1>
                    <h3>Phone: +1 (415) 710-5570 | Email: <a href="mailto:Win.Pomerantz@gmail.com">Win.Pomerantz@gmail.com</a> | San Francisco, CA<br></br>
                        LinkedIn: <a href="https://www.linkedin.com/in/Win-Pomerantz">/Win-Pomerantz</a> | Portfolio: WinPom.github.io | GitHub: <a href="https://github.com/winpom">/winpom</a></h3>
                    <p>
                        Full Stack Web Developer with a robust background in brand and digital marketing.
                        Recently completed a Full Stack Web Development certificate from the University of California, Berkeley,
                        bringing expertise in JavaScript, React, Node.js, and other modern web technologies. Known for creativity,
                        teamwork, resourcefulness, and executing projects from ideation to deployment for startups and Fortune 500’s
                        alike. Lifelong learner and enthusiastic team player with a strong sense of humor.
                    </p>
                    <h2>TECHNICAL SKILLS</h2>
                    <p><strong>Languages/Frameworks</strong>: JavaScript (ES6+), HTML5, CSS3, React, Node.js, Express, Handlebars, jQuery</p>
                    <p><strong>Databases</strong>: MongoDB, MySQL, SQL, NoSQL</p>
                    <p><strong>Additional Skills</strong>: Agile Development, Mobile-First Design, Cross-Functional Collaboration, UI/UX Design, Certified ScrumMaster, Adobe Photoshop</p>
                    <h2>PROJECTS</h2>
                    <p><strong>ReadyCheck</strong> | <a href="https://github.com/jasongalas/ready-check">GitHub Repository</a> | <a href="https://ready-check.onrender.com/">Deployed Project</a></p>
                    <ul>
                        <li>Summary: ReadyCheck is a simple social communication and scheduling app. It empowers users to create, manage, and participate in ReadyChecks, facilitating the organization of planned and impromptu events. From online gaming sessions to coordinating large groups at conferences, festivals, and vacations, ReadyCheck ensures seamless coordination and communication.</li>
                        <li>Role: Project Lead, Full Stack Developer</li>
                        <li>Tools: React.js, Node.js, GraphQL, Apollo Client, MongoDB, Socket.IO, Daisy UI</li>
                    </ul>
                    <p><strong>The Doggy Dog Breed Quiz</strong> | <a href="https://github.com/ZachariahKB/dog-breed-quiz">GitHub Repository</a> | <a href="https://zachariahkb.github.io/dog-breed-quiz/">Deployed Project</a></p>
                    <ul>
                        <li>Summary: An engaging online quiz suggesting dog breeds based on user input. Leveraged existing free API using tiered filtering to produce meaningful results (despite very dirty data).</li>
                        <li>Role: Project Lead, Front End & Back End</li>
                        <li>Tools: HTML, CSS, JavaScript, API, Tailwind CSS</li>
                    </ul>
                    <p><strong>WeatherApp</strong> | <a href="https://winpom.github.io/weather-dashboard/">GitHub Repository</a> | <a href="https://github.com/winpom/weather-dashboard">Deployed Project</a></p>
                    <ul>
                        <li>Summary: Provides current and future weather forecasts for cities. Implemented APIs efficiently to provide real-time weather data, optimizing the app for performance and usability.</li>
                        <li>Role: Sole Developer</li>
                        <li>Tools: HTML, CSS, JavaScript, jQuery, API</li>
                    </ul>
                    <p><strong>Personal Blog</strong> | <a href="https://github.com/winpom/personal-blog-challenge">GitHub Repository</a> | <a href="https://winpom.github.io/personal-blog-challenge/">Deployed Project</a></p>
                    <h2>EXPERIENCE</h2>
                    <div className="job-title">
                        <span><strong>Marketing Consultant – Multiple Clients</strong></span>
                        <span className="location"><i>San Francisco, CA</i></span>
                    </div>
                    <p>Sia Partners (Consulting) Nov 2021 – Apr 2023</p>
                    <ul>
                        <li>Directed strategy and execution for the new Prologis marketplace brand, identifying opportunities for brand expansion.</li>
                        <li>Launched a new marketplace website, collaborating with developers, product managers, and executives, demonstrating resourcefulness in integrating diverse team inputs.</li>
                    </ul>
                    <div> Prologis (Commercial Real Estate)</div>
                    <ul>
                        <li>Designed marketing strategies, budgets, and tactics for focus categories.</li>
                        <li>Improved internal processes, enhancing quarterly marketing strategies.</li>
                        <li>Led end-to-end campaign execution, resulting in record new signups.</li>
                        <li>Managed partnerships with banks and stakeholders, identifying new opportunities through resourceful negotiation and collaboration.</li>
                    </ul>
                    <div className="job-title">
                        <span><strong>MBA Marketing Intern</strong></span>
                        <span className="location"><i>San Francisco, CA</i></span>
                    </div>
                    <p>Ridepanda (eBikes) Jun 2020 – Sep 2020</p>
                    <ul>
                        <li>Pioneered inaugural marketing strategy, defined brand identity, and identified target audiences through AB testing and research.</li>
                        <li>Achieved a milestone of 100 customers pre-launch, enabling successful fundraising efforts, demonstrating resourcefulness in startup environment.</li>
                    </ul>
                    <div className="job-title">
                        <span><strong>Digital Marketing Coordinator</strong></span>
                        <span className="location"><i>San Francisco, CA</i></span>
                    </div>
                    <p>Ubisoft Inc. (Video Game Publisher) Aug 2018–Jul 2019</p>
                    <ul>
                        <li>Introduced and executed digital marketing strategies, leading to record in-game purchases for Rainbow Six: Siege, Ubisoft’s flagship title.</li>
                        <li>Presented brand positioning to stakeholders, aligning marketing plans.</li>
                        <li>Managed digital content creative process from concept to execution for top titles, showcasing resourcefulness in managing tight timelines and creative constraints.</li>
                    </ul>
                    <h2>EDUCATION</h2>
                    <ul className="education">
                        <li><strong>Certificate, Full Stack Web Development </strong>– University of California, Berkeley, June 2024</li>
                        <li><strong>Master of Business Administration, Marketing </strong>– University of California, Berkeley, May 2021</li>
                        <li><strong>Bachelor of Business Administration </strong>– Emory University, May 2014</li>
                        <li><strong>Study Abroad </strong>– Copenhagen Business School, Fall Semester, 2013</li>
                    </ul>
                </div>
            </section>
        </section>
    );
}

export default ResumePage;
