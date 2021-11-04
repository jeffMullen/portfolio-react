import React from 'react';
import Skills from './Skills';

import resumePDF from '../../images/jeff-mullen.pdf';

function Resume() {
    return (
        <section className="resume-page d-flex flex-column mt-5">
            <div className="resume text-center mb-5 mt-2">
                <a className="mt-5" href={resumePDF}
                    rel="noreferrer"
                    target="_blank"
                >Downloadable Resume</a>
            </div>
            <Skills />
        </section>
    )
}

export default Resume;