import React from "react";
import "./style.css";

const PageContent = (props) => {
    return <section className="page-content">
        {props.children}
    </section>
}

export default PageContent;