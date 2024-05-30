import React, { useEffect } from 'react';
import "./style.css";

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
    } = props;

    useEffect(() => {
        document.title = currentPage.name;
    }, [currentPage]);

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
                            onClick={() => setCurrentPage(page)}
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
