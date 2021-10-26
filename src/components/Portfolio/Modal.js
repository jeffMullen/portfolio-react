import React from 'react';
import Modal from 'react-bootstrap/Modal';

function ProjectModal({ modal, modalShow, setModalShow }) {
    console.log('In modal file')
    let { title, deployed, github, tech, description } = modal;
    setModalShow(true);
    console.log(modalShow)




    return (
        <Modal
            {...modalShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
        // <div className="modal fade" tabIndex="-1" id="project-modal">
        //     <div className="modal-dialog">
        //         <div className="modal-content">
        //             <div className="modal-header">
        //                 <h5 className="modal-title">{title}</h5>
        //                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        //                     <span aria-hidden="true">&times;</span>
        //                 </button>
        //             </div>
        //             <div className="modal-body row">
        //                 <a id="liveApp" href={deployed} className="col-6" rel="noreferrer" target="_blank">Live Application</a>
        //                 <a id="gitHubRepo" href={github} className="col-6" rel="noreferrer" target="_blank">GitHub Repository</a>
        //             </div>
        //             <div className="modal-footer row">
        //                 <p id="projectDescription" className="col-12">{description}</p>
        //                 <p id="techUsed" className="col-12">{tech}</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ProjectModal;