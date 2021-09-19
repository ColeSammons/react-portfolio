import React from 'react';
import '../assets/css/Resume.css';
function Resume() {
    return (
        <div className="row justify-content-center">
            <h1 className="text-center mb-4">Resume</h1>
            <div className="text-center mb-5"><a href={require('../assets/Cole_Sammons_Resume.pdf').default} rel="noreferrer" target="_blank" type="button"><button className="btn btn-outline-info"><i className="fas fa-file-pdf"></i> Download My Resume</button></a></div>
            <div className="col-8 col-md-4">
                <h3 className="mx-2">Front End</h3>
                <ul className="mx-2">

                    <li style={{ fontSize: 22 }} className="my-2">
                        <img src="https://img.icons8.com/color/70/000000/javascript.png" alt="javascript-icon" className="skill-icon mr-2" />
                        Javascript
                    </li>
                    <li style={{ fontSize: 22 }} className="my-2">
                        <img src="https://img.icons8.com/color/70/000000/html-5.png" alt="html-icon" className="skill-icon mr-2" />
                        HTML
                    </li>
                    <li style={{ fontSize: 22 }} className="my-2">
                        <img src="https://img.icons8.com/color/70/000000/css3.png" alt="css-icon" className="skill-icon mr-2" />
                        CSS
                    </li>
                    <li style={{ fontSize: 22 }} className="my-2">
                        <img src="https://img.icons8.com/color/70/000000/json--v1.png" alt="json-icon" className="skill-icon mr-2" />
                        JSON
                    </li>
                    <li style={{ fontSize: 22 }} className="my-2">
                        <img src="https://img.icons8.com/color/70/000000/react-native.png" alt="react-icon" className="skill-icon mr-2" />
                        React
                    </li>
                    <li style={{ fontSize: 22 }} className="my-2">
                        <img src="https://img.icons8.com/color/70/000000/bootstrap.png" alt="bootstrap-icon" className="skill-icon mr-2" />
                        Bootstrap
                    </li>
                    <li style={{ fontSize: 22 }} className="my-2">
                        <img src="https://img.icons8.com/color/70/000000/api.png" alt="api-icon" className="skill-icon mr-2" />
                        API
                    </li>
                    <li style={{ fontSize: 22 }} className="my-2">
                        <img src="https://img.icons8.com/ios-filled/70/000000/jquery.png" alt="jquery" className="skill-icon mr-2" />
                        JQuery
                    </li>
                </ul>
            </div>
            <div className="col-8 col-md-4">
                <h3 className="mx-2">Back End</h3>
                <ul className="mx-2">
                    <li style={{ fontSize: 22 }} className="my-2">
                        <img src="https://img.icons8.com/color/70/000000/nodejs.png" alt="node-icon" className="skill-icon mr-2" />
                        Node.js
                    </li>
                    <li style={{ fontSize: 22 }} className="my-2">
                        <img src="https://img.icons8.com/color/70/000000/mongodb.png" alt="mongodb" className="skill-icon mr-2" />
                        MongoDB
                    </li>
                    <li style={{ fontSize: 22 }} className="my-2">
                        <img src="https://img.icons8.com/color/70/000000/sql.png" alt="sql-icon" className="skill-icon mr-2" />
                        SQL
                    </li>
                    <li style={{ fontSize: 22 }} className="my-2">
                        <img src="https://img.icons8.com/color/70/000000/npm.png" alt="npm-icon" className="skill-icon mr-2" />
                        NPM
                    </li>
                    <li style={{ fontSize: 22 }} className="my-2">
                        <img src="https://img.icons8.com/color/70/000000/graphql.png" alt="graphql" className="skill-icon mr-2" />
                        GraphQL
                    </li>
                </ul>

            </div>
            <div className="col-8 col-md-4 justify-content-center mb-5 pb-5">
                <h3 className="mx-2">Other</h3>
                <ul className="mx-2">
                    <li style={{ fontSize: 22 }} className="my-2">
                        <img src="https://img.icons8.com/color/70/000000/git.png" alt="git-icon" className="skill-icon mr-2" />
                        Git
                    </li>
                    <li style={{ fontSize: 22 }} className="my-2">
                        <img src="https://img.icons8.com/color/70/000000/visual-studio-code-2019.png" alt="vs-icon" className="skill-icon mr-2" />
                        VS Code
                    </li>
                    <li style={{ fontSize: 22 }} className="my-2">
                        <img src="https://img.icons8.com/color/70/000000/github--v1.png" alt="github" className="skill-icon mr-2" />
                        Github
                    </li>
                    <li style={{ fontSize: 22 }} className="my-2">
                        <img src="https://img.icons8.com/color/70/000000/heroku.png" alt="heroku" className="skill-icon mr-2" />
                        Heroku
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Resume;