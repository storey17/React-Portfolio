import React from 'react';
import './styles.css';

function MainNavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top p-3">
            <a className="nav-link navbar-brand ml-3" href="index.html">Storey Sheldon</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="portfolio.html">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="resume.html">Resume</a>
                    </li>
                </ul>
                <ul className="navbar-nav mr-5">
                    <li className="nav-item">
                        <a href="contact.html" id="contact-button" className="btn btn-dark px-4">
                            Contact Me
                    </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default MainNavBar;