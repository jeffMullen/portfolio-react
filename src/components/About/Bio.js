import React from "react";

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import selfPortrait from '../../images/Jeff-Mullen-Headshot.png';

function Bio() {
    return (
        <Container>
            <Row className="d-flex mx-0 justify-content-center">
                <Col className="text-center mx-0 px-0 col-8 col-sm-6 col-lg-4">
                    <h2>Hi, I'm Jeff, Frontend Developer.</h2>
                </Col>
            </Row>

            {/* Section starts in flex-column, then at extra-large screens it switches to flex-row.  Then it switches to a diagonal layout */}
            <Row className="bio-row mt-5 mx-0 px-0 text-center d-flex flex-column flex-xl-row align-items-center">
                <Col className="p-0 mt-lg-5 text-center col-md-8 col-lg-7 col-xl-4 order-lg-2">
                    <img className="p-0" src={selfPortrait} alt="Self-Portrait" />
                </Col>
                <Col className="about-paragraph mt-5 mt-lg-0 px-0 col-md-8 col-lg-7 col-xl-4 order-lg-1 align-self-xl-start">
                    <p className="p-3 mb-0">Hi. My name is Jeff. I am a developer who strives to create truly presentable applications. A common thread throughout my life is that I have a methodology to the things I do. As a Massage Therapist, I studied the inner workings of the body to a level of understanding that informed the quality of work I gave. I used this framework to narrow my focus to anatomical structures of the body, and assess what those structures needed therapeutically. Using this methodology ultimately allowed for my creativity and intuition to shine. This work ethic is translated into my coding, baking, and music.
                    </p>
                </Col>
                <Col className="about-paragraph mt-5 p-0 col-md-8 col-lg-7 col-xl-4 text-center order-lg-3 align-self-xl-end">
                    <p className="p-3 m-0">This methodology is what allows me to thrive in the development of quality applications.
                        Functionality and presentation are linked together. Studying and internalizing the fundamentals
                        of programming allow for balance within my process. Through my experiences I have developed the
                        ability to empathize with others, and discover what their needs are. This is a skill that I find
                        valuable in the creation of web applications, as the end-users of the product will have needs,
                        such as accesibility and ease of use, that require thoughtful action.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Bio;