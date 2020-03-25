import React from 'react';
import './styles.css';

function Footer() {
    return (
        <footer className="mt-5 py-3" id="footer">
        <div className="container">
            <div className="row justify-content-center mb-2">
                <div className="col-auto">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/in/storeysheldon/" target="_blank"><i
                                    className="fab fa-linkedin-in fa-lg"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/storey17" target="_blank"><i
                                    className="fab fa-github fa-lg"></i>
                                    </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col col-md-auto text-center">
                    <small className="text-muted">Copyright &copy; Storey Sheldon 2020
                    </small>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;