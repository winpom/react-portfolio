import React from 'react';
import "./style.css";

function Nav({ pages, setCurrentPage, currentPage }) {
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="nav-container">
            <ul className="nav-list">
                {pages.map((page) => (
                    <li 
                        className={`nav-item ${currentPage.name === page.name ? 'active' : ''}`} 
                        key={page.name}
                    >
                        <span 
                            className="nav-link" 
                            onClick={() => {
                                setCurrentPage(page);
                                handleScroll(page.name.toLowerCase());
                            }}
                        >
                            {page.name}
                        </span>
                    </li>
                ))}
            </ul>
            <img className="banner-img" src="/assets/images/site-banner.png" alt="Site Banner: Golden Gate Bridge" />
        </nav>
    );
}

export default Nav;
