import React from 'react';

function Footer() {
    const icons = [
        {
            name: "fa-brands fa-github",
            link: "https://github.com/winpom"
        },
        {
            name: "fa-brands fa-linkedin",
            link: "https://www.linkedin.com/in/win-pomerantz/"
        },
        {
            name: "fa-solid fa-envelope",
            link: "mailto:win.pomerantz@gmail.com"
        }
    ]

    const LinkStyle = {
        textDecoration: "none",
        color: "black",
        cursor: "pointer",
        margin: "0 5px"
    }

    const FooterStyle = {
        backgroundColor: "gray",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 0"
    }

    const IconsContainerStyle = {
        display: "flex",
        justifyContent: "center",
        marginTop: "10px"
    }

    let date = new Date().getFullYear();

    return (
        <footer style={FooterStyle}>
            <div>©{date}</div>
            <div style={IconsContainerStyle}>
                {icons.map(icon => (
                    <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer" style={LinkStyle}>
                        <i className={icon.name}></i>
                    </a>
                ))}
            </div>
        </footer>
    )
}

export default Footer;
