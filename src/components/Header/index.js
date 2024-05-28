import React from 'react';
import "./style.css";

function Header(props) {
    return (
        <header className="header">
            <section>
                <img src="/assets/images/wp-logo-inv.png" alt="Win Pomerantz Logo"
                    className="logo" />
            </section>
            <h1>
                Hello! I'm Win Pomerantz
            </h1>
            <img className="banner-img" src="/assets/images/site-banner.png" alt="Site Banner: Golden Gate Bridge" />
            {props.children}
        </header>
    );
}

export default Header;
