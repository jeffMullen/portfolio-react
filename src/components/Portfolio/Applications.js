import React, { useState } from 'react';
import ApplicationGroup from './ApplicationGroup';
import ProjectModal from './Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Applications() {

    const [modal, setModal] = useState({
        id: null,
        title: '',
        deployed: '',
        github: '',
        image: '',
        tech: '',
        description: ''
    })

    const [modalShow, setModalShow] = useState(false);

    function modalHandler(project) {
        setModal(project);
    }

    return (
        <Container>
            <Row>
                <Col className="text-center">
                    <h2>Portfolio.</h2>
                </Col>
            </Row>

            <ApplicationGroup modalHandler={modalHandler} setModalShow={setModalShow} />


            <ProjectModal modalShow={modalShow} setModalShow={setModalShow} modal={modal} />
        </Container >

    );
}

export default Applications;