import React from 'react';
import { NavLink } from 'react-router-dom';

function About() {
    return (
        <div>
            <h1 className="text-center">About Me</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid profileImage" src={require(`../assets/images/me.jpg`).default}></img>
                    </div>
                    <div className="col-md-6">
                        <p>
                            Full stack web developer with experience in customer service, looking to innovate and create clean, intuitive, and responsive websites. Soon to earn a certificate in full stack web development through U of A, with a personal emphasis in Javascript, Node.js, MySQL, and Express. I’ve been known as a quick learner, a multitasker, and tend to take the lead on projects of all sizes. I’m incredibly excited to test my skills, learn new ones, and get into a field I finally feel passionate about.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;