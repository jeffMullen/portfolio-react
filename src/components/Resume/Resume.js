import React from 'react';
import Skills from './Skills';

function Resume() {
    return (
        <section className="resume-page mt-5">
            <div className="resume text-center mb-5 mt-5">
                <a className="mt-5" href="./images/jeff-mullen-ats-resume-2.0.pdf"
                    rel="noreferrer"
                    target="_blank"
                >Downloadable Resume</a>
            </div>
            <Skills />
        </section>
    )
}

export default Resume;