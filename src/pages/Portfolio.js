import React from 'react';
import Project from '../components/Project';
import '../assets/css/project.css';


function Portfolio() {
    const projects = [
        {
            name: "Recipe Share",
            alt: "recipe-share",
            tools: "Javascript, HTML, CSS, MySQL, Sequelize, Express, Handlebars, JQuery, Multer, Bcyrpt, DotENV, Git, Github",
            github: "https://github.com/ColeSammons/recipe-share",
            deployed: "https://safe-harbor-59712.herokuapp.com/"
        },
        {
            name: "Silver Stream",
            alt: "silver-stream",
            tools: "Javascript, HTML, CSS, Foundation, Git, Github",
            github: "https://github.com/ColeSammons/Silver-Stream",
            deployed: "https://colesammons.github.io/Silver-Stream/"
        },
        {
            name: "Run Buddy",
            alt: "run-buddy",
            tools: "Javascript, HTML, CSS, Git, Github",
            github: "https://github.com/ColeSammons/run-buddy",
            deployed: "https://colesammons.github.io/run-buddy/"
        },
        {
            name: "Hard Code Gamers",
            alt: "hard-code-gamers",
            tools: "Javascript, HTML, CSS, Express, Bcyrpt, Git, Github, GraphQL, Mongoose, JSONWebToken, React",
            github: "https://github.com/ColeSammons/hard-code-gamer",
            deployed: "https://hard-code-gamer.herokuapp.com/"
        },
        {
            name: "Photo Port",
            alt: "photo-port",
            tools: "Javascript, HTML, CSS, React, Git, Github",
            github: "https://github.com/ColeSammons/photo-port",
            deployed: "https://colesammons.github.io/photo-port/"
        },
        {
            name: "Food Festival",
            alt: "food-festival",
            tools: "Javascript, HTML, CSS, Bootstrap, JQuery, Popper, Webpack Git, Github",
            github: "https://github.com/ColeSammons/food-festival",
            deployed: "https://colesammons.github.io/food-festival/"
        },
    ]

    return (
        <div className="container">
            <h1 className="text-center">Projects</h1>
            <Project projects={projects}></Project>
        </div>
    );
};

export default Portfolio;