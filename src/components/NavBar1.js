import React from 'react';
import './styles.css';

function NavBar1() {
    return (
        <nav className="navbar navbar-expand-lg" id="fixed-navbar">
            <ul className="navbar-nav ml-auto social-media">
                <li className="nav-item">
                    <a className="nav-link" href="https://www.linkedin.com/in/storeysheldon/" target="_blank"><i
                        className="fab fa-linkedin-in fa-lg"></i></a>
                </li>
                <li className="nav-item ml-3 mr-5">
                    <a className="nav-link" href="https://github.com/storey17" target="_blank"><i
                        className="fab fa-github fa-lg"></i></a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar1;