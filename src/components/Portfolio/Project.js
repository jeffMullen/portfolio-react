import React from "react";

function Project({ modalHandler, project }) {
    return (
        <div key={project.id}>
            <h3><span>{project.title}</span></h3>
            <p>{project.deployed}</p>
            <p>{project.github}</p>
            <img onClick={() => modalHandler(project)} data-toggle="modal" data-target="#application-modal"
                src={project.image} alt={`Link to ${project.title} information`} />
            <p>{project.tech}</p>
            <p>{project.description}</p>
        </div>
    )
}

export default Project;