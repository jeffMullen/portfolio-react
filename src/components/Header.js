import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


function Header({ currentPage, pageChange }) {
    return (
        <header className="header">
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand>Jeff Mullen</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto d-lg-flex m-lg-0">
                            <Nav.Link href="#about" onClick={() => pageChange('About')}>About</Nav.Link>
                            <Nav.Link href="#applications" onClick={() => pageChange('Applications')}>Portfolio</Nav.Link>
                            <Nav.Link href="#contact" onClick={() => pageChange('Contact')}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;