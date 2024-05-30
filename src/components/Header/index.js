import React from 'react';
import "./style.css";

function Header(props) {
    return (
        <header className="header">
            <section>
                <img src="/assets/images/wp-logo.png" alt="Win Pomerantz Logo"
                    className="logo" />
            </section>
            {props.children}
        </header>
    );
}

export default Header;
