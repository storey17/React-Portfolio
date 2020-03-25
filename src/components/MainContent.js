import React from 'react';
import './styles.css';
import PortfolioPic from './IMG_1383.jpeg';


function MainContent() {
    return (
        <section className="main-content pt-5">
            <div className="container">
                <h1 className="display-4 text-center">STOREY SHELDON</h1>
                <p className="lead text-center">Full Stack Web Developer</p>
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <img src={PortfolioPic} alt="Storey Sheldon" className="img" />
                    </div>
                </div>
                <div className="col-md-6" id="about-me">
                    <p>
                        Full stack web developer with a foundation in Marketing. I deliver customized solutions for your
                        web development needs with a focus on ensuring seamless and delightful online customer
                        experiences.
                </p>
                    <p>
                        3+ years experience working internationally in diverse team settings strengthening my
                        communication skills, flexibility and adaptability in uncertain situations. Focused on providing
                        outstanding results that meet and exceed project criteria. My tenacious, solutions driven
                        approach and interpersonal skills makes me a unique team member who will add value and
                        efficiency to your team.
                </p>
                </div>
            </div>
        </section>
    );
}

export default MainContent;