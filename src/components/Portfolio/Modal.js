import React from 'react';

function Modal({ modal }) {
    let { title, deployed, github, tech, description } = modal;

    return (
        <div className="modal fade" tabIndex="-1" id="application-modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body row">
                        <a id="liveApp" href={deployed} className="col-6" rel="noreferrer" target="_blank">Live Application</a>
                        <a id="gitHubRepo" href={github} className="col-6" rel="noreferrer" target="_blank">GitHub Repository</a>
                    </div>
                    <div className="modal-footer row">
                        <p id="projectDescription" className="col-12">{description}</p>
                        <p id="techUsed" className="col-12">{tech}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;