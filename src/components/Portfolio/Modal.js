import React from 'react';
import Modal from 'react-bootstrap/Modal';

function ProjectModal({ modal, modalShow, setModalShow }) {
    console.log('In modal file')
    let { title, deployed, github, tech, description } = modal;
    // setModalShow(true);
    console.log(modalShow)




    return (
        // <Modal.Dialog>
        <Modal
            show={modalShow}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={() => setModalShow(false)}
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
    )
}

export default ProjectModal;