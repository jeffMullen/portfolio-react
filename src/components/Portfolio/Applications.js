import React from 'react';
import Premier from './Premier';
import Secondary from './Secondary';
import Modal from './Modal';

function Applications() {

    function modalHandler(title, deployed, github, tech, description) {

        let modalTitle = document.querySelector('.modal-title')
        let liveApp = document.querySelector('#liveApp');
        let gitHubRepo = document.querySelector('#gitHubRepo');
        let techUsed = document.querySelector('#techUsed')
        let projectDescription = document.querySelector('#projectDescription')

        liveApp.setAttribute('href', deployed);
        gitHubRepo.setAttribute('href', github);
        modalTitle.innerHTML = title;
        techUsed.innerHTML = tech;
        projectDescription.innerHTML = description;
    }

    return (

        <section className="applications section-heading">
            {/* <!-- Applications section --> */}
            <h2>Applications</h2>

            {/* <!-- Divider between heading and content --> */}

            <div className="divider"></div>

            {/* <!-- Overall applications flexbox --> */}

            <div className="applications-content">

                {/* <!-- Largest image in flexbox --> */}
                <Premier modalHandler={modalHandler} />

                {/* <!-- Smaller images of applications flexbox --> */}
                <Secondary modalHandler={modalHandler} />

            </div>
            <Modal />
        </section>

    );
}

export default Applications;