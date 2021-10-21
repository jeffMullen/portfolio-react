import React, { useState } from 'react';
import ApplicationGroup from './ApplicationGroup';
import Modal from './Modal';

function Applications() {

    const [modal, setModal] = useState({
        id: null,
        title: '',
        deployed: '',
        github: '',
        image: '',
        tech: '',
        description: ''
    })

    function modalHandler(project) {

        setModal(project);
    }

    return (

        <section className="applications section-heading">
            {/* <!-- Applications section --> */}
            <h2>Applications</h2>

            {/* <!-- Divider between heading and content --> */}

            <div className="divider"></div>

            {/* <!-- Overall applications flexbox --> */}
            <ApplicationGroup modalHandler={modalHandler} />

            <Modal modal={modal} />
        </section>

    );
}

export default Applications;