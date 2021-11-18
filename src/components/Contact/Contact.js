import React from 'react';
import Form from './Form';


function Contact() {


    return (
        <section>
            <div className="text-center mb-5">
                <h2>Feel free to send me a message.</h2>
            </div>
            <div className="d-flex flex-column text-center mb-5">
                <h6>(267) 603-3134</h6>
                <h6>jeffmullendev@gmail.com</h6>
            </div>
            <Form />
        </section>
    )
}

export default Contact;