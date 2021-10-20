import React from 'react';

function Footer() {
    return (
        <footer id="contact" className="contact section-heading">
            {/* <!-- Contact me section --> */}
            <h2>Contact</h2>

            {/* <!-- Divider between heading and content --> */}

            <div className="divider"></div>

            <div className="contact-content">
                <a href="https://github.com/jeffMullen" rel="noreferrer" target="_blank">GitHub</a>
                <a href="https://linkedin.com/in/jeff-mullen27" rel="noreferrer" target="_blank">LinkedIn</a>
                <a href="tel:+1-267-603-3134">(267) 603-3134</a>
                <a href="mailto:jeffmullendev@gmail.com?subject=Portfolio" subject="Portfolio">jeffmullendev@gmail.com</a>
                <a href="./assets/images/jeff-mullen-ats-resume-2.0.pdf" rel="noreferrer" target="_blank">Resume</a>
            </div>
        </footer>
    )
}

export default Footer;