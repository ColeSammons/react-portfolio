import React from 'react';
import '../../assets/css/project.css';

function Project({ projects }) {
    console.log(projects);
    const displayProject = projects.map(project =>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 m-3 containerImg" key={project.alt}>
            <div className="wrapper text-center">
                <div className="row hold">
                    <div className="col-6 px-0">
                        <a href={project.github} target="_blank" rel="norefferer">
                            <button className="btn btn-outline-light btn-lg btn-block"><i className="fab fa-github"></i></button>
                        </a>
                    </div>
                    <div className="col-6 px-0">
                        <a href={project.deployed} target="_blank" rel="norefferer">
                            <button className="btn btn-outline-light btn-lg btn-block"><i className="fa fa-link"></i></button>
                        </a>
                    </div>
                </div>
            </div>
            <article className="text-center">
                <h2>{project.name}</h2>
                <h4 className="tools">{project.tools}</h4>
            </article>
            <img src={require(`../../assets/images/${project.alt}.png`).default} alt={project.alt}></img>
        </div>
    )
    console.log(displayProject);
    return (
        <div className="row justify-content-center mb-5 pb-5">
            {displayProject}
        </div>
    );
};

export default Project;