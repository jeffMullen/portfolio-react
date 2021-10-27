import React, { useState } from 'react';
import Form from './Form';

function Contact() {

    const handleSubmit = (nameValue, emailValue, messageValue) => {

        const message = {
            nameValue,
            emailValue,
            messageValue
        }
        console.log(message)
    }

    return (
        <section>
            <div className="text-center mb-5">
                <h2>Feel free to send me a message.</h2>
            </div>
            <Form handleSubmit={handleSubmit} />
        </section>
    )
}

export default Contact;