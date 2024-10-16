import React from 'react';
import AboutPage from '../About/about';
import PortfolioPage from '../Portfolio/portfolio';
import CVPage from '../CV/cv';
// import LifePage from '../Life/life';
// import ContactPage from '../Contact/contact';

function MainContent() {
    return (
        <div>
            <section id="about">
                <AboutPage />
            </section>
            <section id="cv">
                <CVPage />
            </section>
            <section id="portfolio">
                <PortfolioPage />
            </section>
            {/* <section id="life">
                <LifePage />
            </section> */}
            {/* <section id="contact">
                <ContactPage />
            </section> */}
        </div>
    );
}

export default MainContent;
