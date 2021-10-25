import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Skills() {

    const skillsArr = [
        'JavaScript',
        'CSS',
        'React',
        'Bootstrap',
        'jQuery',
        'Express',
        'Node',
        'MySQL',
        'Sequelize',
        'Handlebars',
        'Jest',
        'MongoDB'
    ]

    return (
        <Container className="skills my-5">
            <Row>
                <Col className="text-center">
                    <h2>Skills</h2>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="text-center">
                    {skillsArr.map(skill => <p className="col-6 col-sm-4 col-lg-3 mb-4 py-2 text-center">{skill}</p>)}
                </Col>
            </Row>
        </Container>
    )
}

export default Skills;