import React from "react";

function Project({ modalHandler, project }) {
    return (
        <div key={project.id} className="project p-3">
            <div>
                <h3><span>{project.title}</span></h3>
                <img onClick={() => modalHandler(project)} data-toggle="modal" data-target="#application-modal"
                    src={project.image} alt={`Link to ${project.title} information`} />
            </div>
        </div>
    )
}

export default Project;