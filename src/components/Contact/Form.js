import React, { useState } from 'react';
import { useForm } from '@formcarry/react';

function Form() {

    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [messageValue, setMessageValue] = useState('');

    const { state, submit } = useForm({
        id: 'rjc7BUfIxdg'
    });

    if (state.submitted) {
        return <div className="thank-you text-center">Thank you for your message. </div>;
    }

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
    }

    const handleBlur = (e) => {
        const { value } = e.target;

        const required = 'This field is required';

        if (value === '') {
            e.target.setAttribute('placeholder', required)
        }
        return false;
    }

    return (
        <form onSubmit={submit} className="contactForm">
            <div className="mb-3 d-flex flex-column">
                <label htmlFor="name" className="form-label"><span>Name</span></label>
                <input value={nameValue} name="name"
                    onChange={handleInputChange}
                    onBlur={(e) => handleBlur(e)}
                    type="text"
                    className="shadow-none"
                    id="name" aria-describedby="name"></input>
            </div>
            <div className="mb-3 d-flex flex-column">
                <label htmlFor="email" className="form-label"><span>Email address</span></label>
                <input value={emailValue} name="email"
                    onChange={handleInputChange}
                    onBlur={(e) => handleBlur(e)}
                    type="email"
                    className="shadow-none"
                    id="email" aria-describedby="email"></input>
            </div>
            <div className="mb-3 d-flex flex-column">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea value={messageValue} name="message"
                    onChange={handleInputChange}
                    onBlur={(e) => handleBlur(e)}
                    className="shadow-none" id="message"></textarea>
            </div>
            {/* Gotcha spam prevention */}
            <input type="hidden" name="_gotcha"></input>
            <button onClick={(e) => {
                if (nameValue === '' || emailValue === '' || messageValue === '') {
                    e.preventDefault();
                    e.target.nextElementSibling.textContent = 'All fields must be filled';
                }
            }} type="submit">Submit</button>
            <p className="mt-4 submit-failure"></p>
        </form>
    )
}

export default Form;