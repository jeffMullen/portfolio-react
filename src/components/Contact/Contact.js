import React, { useState } from 'react';

function Contact() {

    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [messageValue, setMessageValue] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'name') {
            setNameValue(value);
        }
        if (name === 'email') {
            setEmailValue(value);
        } else if (name === 'message') {
            setMessageValue(value);
        }

        console.log(nameValue);
        console.log(emailValue);
        console.log(messageValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = {
            nameValue,
            emailValue,
            messageValue
        }
    }

    return (
        <section>
            <div className="text-center mb-5">
                <h2>Feel free to send me a message.</h2>
            </div>
            <form className="contactForm">
                <div className="mb-3 d-flex flex-column">
                    <label htmlFor="contactName" className="form-label">Name</label>
                    <input value={nameValue} name="name" onChange={handleInputChange} type="email" className="shadow-none" id="contactName" aria-describedby="name"></input>
                </div>
                <div className="mb-3 d-flex flex-column">
                    <label htmlFor="contactEmail" className="form-label">Email address</label>
                    <input value={emailValue} name="email" onChange={handleInputChange} type="email" className="shadow-none" id="contactEmail" aria-describedby="email"></input>
                </div>
                <div className="mb-3 d-flex flex-column">
                    <label htmlFor="contactMessage" className="form-label">Message</label>
                    <textarea value={messageValue} name="message" onChange={handleInputChange} className="shadow-none" id="contactMessage"></textarea>
                </div>

                <button onClick={handleSubmit} type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contact;