import React from 'react';
import Modal from 'react-bootstrap/Modal';

function ProjectModal({ modal, modalShow, setModalShow }) {
    let { title, deployed, github, tech, description } = modal;

    return (
        <Modal
            show={modalShow}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={() => setModalShow(false)}
        >
            <Modal.Header closeButton>
                <Modal.Title className="m-2" id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-around">
                <a href={deployed} rel="noreferrer" target="_blank" className="col-6 text-center">Live Application</a>
                <a href={github} rel="noreferrer" target="_blank" className="col-6 text-center">GitHub Repository</a>
            </Modal.Body>
            <Modal.Footer className="d-flex flex-column align-items-start">
                <p className="col">{tech}</p>
                <p className="col">{description}</p>
            </Modal.Footer>
        </Modal>
    )
}

export default ProjectModal;