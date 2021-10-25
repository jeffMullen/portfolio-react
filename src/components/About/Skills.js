import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Skills() {

    const skillsArr = [
        'JavaSCript',
        'CSS',
        'React',
        'Bootstrap',
        'jQuery',
        'Express',
        'Node',
        'MySQL',
        'Sequelize',
        'Handlebars',
        'Jest'
    ]

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Skills</h2>
                </Col>
            </Row>
            {/* <!-- Skills content --> */}
            <Row>
                <Col>
                    {skillsArr.map(skill => <p>{skill}</p>)}
                </Col>
            </Row>
        </Container>
    )
}

export default Skills;