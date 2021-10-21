import React from "react";

function Project({ modalHandler, project }) {
    return (
        <div key={project.id}>
            <h3><span>{project.title}</span></h3>
            <img onClick={() => modalHandler(project)} data-toggle="modal" data-target="#application-modal"
                src={project.image} alt={`Link to ${project.title} information`} />
        </div>
    )
}

export default Project;