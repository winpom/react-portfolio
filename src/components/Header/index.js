import React from 'react';
import "./style.css";

function Header(props) {
    return (
        <header className="header">
            <section>
                <img src="/images/wp-logo.png" alt="Win Pomerantz Logo"
                    class="logo" />
            </section>
            <h1>
                Hello! I'm Win Pomerantz
            </h1>
            <img className="banner-img" src="/images/site-banner.png" alt="Site Banner: Golden Gate Bridge" />
            {props.children}
        </header>
    );
}

export default Header;
