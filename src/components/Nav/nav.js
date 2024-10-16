import React, { useEffect, useState } from 'react';
import './style.css';

function Nav({ pages, setCurrentPage, currentPage }) {
  const [scrolling, setScrolling] = useState(false); // New state to lock the scroll observer

  useEffect(() => {
    const options = {
      root: null, // Uses the viewport as the root
      rootMargin: '0px',
      threshold: [0.1, 0.9], // This ensures that we detect both entry and exit when scrolling
    };

    const observer = new IntersectionObserver((entries) => {
      if (!scrolling) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const matchedPage = pages.find(
              (page) => page.name.toLowerCase() === sectionId
            );
            if (matchedPage) {
              setCurrentPage(matchedPage); // Update the active page
            }
          }
        });
      }
    }, options);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section); // Observe each section
    });

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pages, setCurrentPage, scrolling]);

  // Function to handle scroll with scroll lock and navbar offset
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const navHeight = 90;

    if (section) {
      setScrolling(true); // Activate scroll lock

      // Calculate the position of the section, adjusting for the navbar height
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionPosition - navHeight;

      // Smooth scroll to the section with the adjusted position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Remove the lock after scrolling finishes
      setTimeout(() => {
        setScrolling(false);
      }, 800); // Adjust timeout duration to match the scroll speed
    }
  };

  return (
    <nav className="nav-container">
      <section>
        <img
          src="/assets/images/wp-logo.png"
          alt="Win Pomerantz Logo"
          className="logo"
        />
      </section>
      <ul className="nav-list">
        {pages.map((page) => (
          <li
            className={`nav-item ${currentPage.name === page.name ? 'active' : ''
              }`}
            key={page.name}
          >
            <span
              className="nav-link"
              onClick={() => {
                setCurrentPage(page); // Update the active link
                handleScrollToSection(page.name.toLowerCase());
              }}
            >
              {page.name}
            </span>
          </li>
        ))}
      </ul>
      <img
        className="banner-img"
        src="/assets/images/site-banner.png"
        alt="Site Banner: Golden Gate Bridge"
      />
    </nav>
  );
}

export default Nav;
