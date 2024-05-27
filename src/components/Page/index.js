import React from "react";

import AboutPage from '../../Pages/About/about';
import ContactPage from '../../Pages/Contact/contact';
import PortfolioPage from '../../Pages/Portfolio/portfolio';
import ResumePage from '../../Pages/Resume/resume';
import PageContent from '../Page-Content';

function Page({ currentPage }) {
    const renderPage = () => {
        if (currentPage.name === 'About') {
            return <AboutPage />
        } else if (currentPage.name === 'Contact') {
            return <ContactPage />
        } else if (currentPage.name === 'Portfolio') {
            return <PortfolioPage />
        } else if (currentPage.name === 'Resume') {
            return <ResumePage />
        } else {
            return <AboutPage/>
        }
    }

    return <section>
        <PageContent>{renderPage()}</PageContent>
    </section>
}

export default Page;