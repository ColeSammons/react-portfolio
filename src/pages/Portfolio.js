import React from 'react';
import Project from '../components/Project';
import '../assets/css/project.css';


function Portfolio() {
    const projects = [
        {
            name: "Recipe Share",
            alt: "recipe-share",
            tools: "Javascript, HTML, CSS, MySQL, Sequelize, Express, Handlebars, JQuery, Multer, Bcyrpt, DotENV, Git, Github",
            desc: "Allows users to create and share recipes with a sleek and modern design.",
            github: "https://github.com/ColeSammons/recipe-share",
            deployed: "https://safe-harbor-59712.herokuapp.com/"
        },
        {
            name: "Silver Stream",
            alt: "silver-stream",
            tools: "Javascript, HTML, CSS, Foundation, Git, Github",
            desc: "A movie database website akin to IMDB.",
            github: "https://github.com/ColeSammons/Silver-Stream",
            deployed: "https://colesammons.github.io/Silver-Stream/"
        },
        {
            name: "Run Buddy",
            alt: "run-buddy",
            tools: "Javascript, HTML, CSS, Git, Github",
            desc: "A fun little site that uses basic html and css to make a mock fitness website.",
            github: "https://github.com/ColeSammons/run-buddy",
            deployed: "https://colesammons.github.io/run-buddy/"
        },
        {
            name: "Hard Code Gamers",
            alt: "hard-code-gamers",
            tools: "Javascript, HTML, CSS, Express, Bcyrpt, Git, Github, GraphQL, Mongoose, JSONWebToken, React",
            desc: "A gaming website that combines youtube and twitch api to create a seamless experience for everything gaming.",
            github: "https://github.com/ColeSammons/hard-code-gamer",
            deployed: "https://young-badlands-81611.herokuapp.com/"
        },
        {
            name: "Photo Port",
            alt: "photo-port",
            tools: "Javascript, HTML, CSS, React, Git, Github",
            desc: "A mock photo gallery site using React.",
            github: "https://github.com/ColeSammons/photo-port",
            deployed: "https://colesammons.github.io/photo-port/"
        },
        {
            name: "Food Festival",
            alt: "food-festival",
            tools: "Javascript, HTML, CSS, Bootstrap, JQuery, Popper, Webpack Git, Github",
            desc: "A mock food festival website that uses React.",
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