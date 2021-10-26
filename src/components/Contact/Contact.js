import React from 'react';
import Form from 'react-bootstrap/Form'

function Contact() {

    return (
        <Form>
            <Form.Group className="mb-3" controlId="Contact.ControlName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Contact.ControlEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Contact.ControlMessage">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
    )

}

export default Contact;