import React, { useState } from 'react';

function Form({ handleSubmit }) {

    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [messageValue, setMessageValue] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)

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
        <form className="contactForm">
            <div className="mb-3 d-flex flex-column">
                <label htmlFor="contactName" className="form-label"><span>Name</span></label>
                <input value={nameValue} name="name"
                    onChange={handleInputChange}
                    onBlur={(e) => handleBlur(e)}
                    type="email"
                    className="shadow-none"
                    id="contactName" aria-describedby="name"></input>
            </div>
            <div className="mb-3 d-flex flex-column">
                <label htmlFor="contactEmail" className="form-label"><span>Email address</span></label>
                <input value={emailValue} name="email"
                    onChange={handleInputChange}
                    onBlur={(e) => handleBlur(e)}
                    type="email"
                    className="shadow-none"
                    id="contactEmail" aria-describedby="email"></input>
            </div>
            <div className="mb-3 d-flex flex-column">
                <label htmlFor="contactMessage" className="form-label">Message</label>
                <textarea value={messageValue} name="message"
                    onChange={handleInputChange}
                    onBlur={(e) => handleBlur(e)}
                    className="shadow-none" id="contactMessage"></textarea>
            </div>

            <button onClick={(e) => {
                e.preventDefault();
                if (nameValue !== '' && emailValue !== '' && messageValue !== '') {
                    handleSubmit(nameValue, emailValue, messageValue);
                    setNameValue('');
                    setEmailValue('');
                    setMessageValue('');
                    e.target.nextElementSibling.textContent = '';
                } else {
                    e.target.nextElementSibling.textContent = 'All fields must be filled';
                }
            }} type="submit">Submit</button>
            <p className="mt-4 submit-failure"></p>
        </form>
    )
}

export default Form;