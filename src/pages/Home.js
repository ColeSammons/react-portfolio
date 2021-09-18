import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/Home.css'


function Home() {
    return (
        <div className="jumbotron text-center pt-0">
            <h1 className="display-4">Cole Sammons</h1>
            <p className="desc">Full Stack Web Developer</p>
            <NavLink className="btn btn-outline-light btn-lg text-center" to="/about">About me</NavLink>
        </div>
    )
};

export default Home;