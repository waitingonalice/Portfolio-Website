import * as React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Styles/index.scss";
import PortfolioNavbar from "../Components/Navbar";
import AboutMe from "../Components/AboutMe";

// markup
const IndexPage = () => {
    return (
        <div className="parent">
            <PortfolioNavbar />
            <AboutMe></AboutMe>
        </div>
    );
};

export default IndexPage;
