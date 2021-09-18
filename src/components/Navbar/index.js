import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse float-right" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item px-lg-3">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>

                    <li className="nav-item px-lg-3" >
                    <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
                    </li>

                    <li className="nav-item px-lg-3">
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    </li>

                    <li className="nav-item px-lg-3">
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    </li>

                    <li className="nav-item px-lg-3">
                    <NavLink to="/resume" className="nav-link">Resume</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;