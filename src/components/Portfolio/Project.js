import React from "react";

function Project({ modalHandler, project, setModalShow }) {
    return (
        <div key={project.id} onClick={() => {
            modalHandler(project);
            setModalShow(true);
        }} className="project p-3">
            <div>
                <h3><span>{project.title}</span></h3>
                <img src={project.image} alt={`Link to ${project.title} information`} />
            </div>
        </div>
    )
}

export default Project;