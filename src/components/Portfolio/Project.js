import React from "react";

function Project({ modalHandler, project }) {
    return (
        <div key={project.id} onClick={() => modalHandler(project)} className="project p-3" data-toggle="modal" data-target="#project-modal">
            <h3><span>{project.title}</span></h3>
            <div>
                <img data-toggle="modal" data-target="#project-modal"
                    src={project.image} alt={`Link to ${project.title} information`} />
            </div>
        </div>
    )
}

export default Project;