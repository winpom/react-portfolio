import React from "react";
import "./style.css";

function CVPage() {
    const downloadCV = () => {
        const anchor = document.createElement("a");
        anchor.href = "/assets/Win-Pomerantz-CV.pdf";
        anchor.download = "Win-Pomerantz-CV.pdf";
        anchor.click();
    };

    return (
        <section className="resume-section">
            <h1>My CV</h1>
            <div className="button-container">
                <button onClick={downloadCV} className="download-button">Download CV as PDF</button>
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
                    <h3>Phone: +1 (415) 710-5570 | Email: <a href="mailto:Win.Pomerantz@gmail.com">Win.Pomerantz@gmail.com</a> | San Francisco, CA<br></br> Nationality: American |
                        LinkedIn: <a href="https://www.linkedin.com/in/Win-Pomerantz">/Win-Pomerantz</a> | Portfolio: WinPom.github.io | GitHub: <a href="https://github.com/winpom">/winpom</a></h3>
                    <p>
                        Passionate Full Stack Web Developer with expertise in JavaScript, React, Node.js, and configuration management.
                        Recently completed an intensive Full Stack Web Development course at the University of California, Berkeley.
                        Demonstrated ability to execute projects from ideation to deployment, solving complex problems and delivering
                        high-quality solutions in international settings. Skilled in collaborating with cross-functional teams and
                        enhancing front-end user experiences, leveraging a strong background in brand and digital marketing. A proactive
                        and enthusiastic team player, as well as an independent contributor, eager to contribute and grow in a dynamic
                        development environment.
                    </p>
                    <h2>SOFT SKILLS</h2>
                    <ul>
                        <li>Proficient in project and time management</li>
                        <li>Skilled in stakeholder and people management</li>
                        <li>Experienced team lead with expertise in configuration management</li>
                        <li>Capable of providing strategic vision and direction</li>
                        <li>Adept at implementing and adapting complex technologies</li>
                        <li>Skilled at navigating and contributing to large, international organizations</li>
                        <li>Excellent communication and collaboration skills</li>
                    </ul>
                    <h2>TECHNICAL SKILLS</h2>
                    <p><strong>Languages/Frameworks</strong>: JavaScript (ES6+), HTML5, CSS3, React, Node.js, Express, Handlebars, jQuery</p>
                    <p><strong>Databases</strong>: MongoDB, MySQL, SQL, NoSQL</p>
                    <p><strong>Tools/Technologies</strong>: Git, Agile Development, CI/CD, DevOps, Adobe Photoshop, RESTful APIs, Certified ScrumMaster</p>
                    <h2>PROJECTS</h2>
                    <p><strong>ReadyCheck Mobile</strong> | <a href="https://github.com/jasongalas/readycheck-mobile">GitHub Repository</a> | Work In Progress</p>
                    <ul>
                        <li>Summary: Utilizing my spare time to develop the ReadyCheck webapp for deployment in a live mobile environment, focusing on optimization, scalability, and virtualization. Incorporating best practices for end-user and potential investor readiness.</li>
                        <li>Role: Project Lead (team of four), Full Stack Developer </li>
                        <li>Tools: React Native, Expo, AWS</li>
                    </ul>
                    <p><strong>ReadyCheck</strong> | <a href="https://github.com/jasongalas/ready-check">GitHub Repository</a> | <a href="https://ready-check.onrender.com/">Deployed Project</a></p>
                    <ul>
                        <li>Summary: Led a team to create an application for users to organize events quickly and efficiently. Designed for scalability, implemented Git branch protection, and managed code integrity for seamless collaboration.</li>
                        <li>Role: Project Lead (team of four), Full Stack Developer</li>
                        <li>Tools: React.js, Node.js, GraphQL, Apollo Client, MongoDB, Socket.IO, Daisy UI</li>
                    </ul>
                    <p><strong>The Doggy Dog Breed Quiz</strong> | <a href="https://github.com/ZachariahKB/dog-breed-quiz">GitHub Repository</a> | <a href="https://zachariahkb.github.io/dog-breed-quiz/">Deployed Project</a></p>
                    <ul>
                        <li>Summary: Created a multi-question quiz that processes user input to generate specific dog breed results using an online API. Standardized inconsistent data into hard-coded generalized attribute categories to ensure user answers would lead to meaningful outputs.</li>
                        <li>Role: Project Lead (team of three), Full Stack Developer</li>
                        <li>Tools: HTML, CSS, JavaScript, Bootstrap, API, Tailwind CSS</li>
                    </ul>
                    <p><strong>WeatherApp</strong> | <a href="https://winpom.github.io/weather-dashboard/">GitHub Repository</a> | <a href="https://github.com/winpom/weather-dashboard">Deployed Project</a></p>
                    <ul>
                        <li>Summary: Developed an application that utilized local storage to save and display recent user searches. Designed to take user inputs and provide a week's weather forecast for the specified location, the application made two API queries: the first to retrieve city coordinates, and the second to generate the weather data based on those coordinates.</li>
                        <li>Role: Sole Developer</li>
                        <li>Tools: HTML, CSS, JavaScript, jQuery, API, Local Storage</li>
                    </ul>
                    <h2>EXPERIENCE</h2>
                    <div className="job-title">
                        <span><strong>Marketing Consultant – Multiple Clients</strong></span>
                        <span className="location"><i>San Francisco, CA</i></span>
                    </div>
                    <p>Sia Partners (Consulting) Nov 2021 – Apr 2023</p>
                    <div> Prologis (<i>Commercial Real Estate</i>)</div>
                    <ul>
                        <li>Directed strategy and execution for the new Prologis marketplace brand, identifying opportunities for brand expansion.</li>
                        <li>Launched a new marketplace website, collaborating with developers, product managers, and executives, demonstrating resourcefulness in integrating diverse team inputs.</li>
                    </ul>
                    <div> eBay (<i>Peer-to-Peer Online Marketplace</i>)</div>
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
                    <h2>PERSONAL INTERESTS</h2>
                    <ul className="education">
                        <li><strong>Ceramic Sculpture</strong>: Starting at age 13, my love for ceramic sculpture has only grown with each creation. </li>
                        <li><strong>Cooking and Baking</strong>: There are few greater sources of satisfaction than making something delicious!</li>
                        <li><strong>Writing</strong>: From sitcom pilots to long-form fiction, I have always loved telling a story.</li>
                        <li><strong>Traveling</strong>: Fortunate to have seen much of the world, and I'm always seeking the next adventure!</li>
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

export default CVPage;
