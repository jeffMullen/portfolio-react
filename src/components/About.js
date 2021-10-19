import React from 'react';

function About() {

    return (
        <section id="about" className="about section-heading">
            {/* <!-- About me section --> */}
            <h2>About Me</h2>

            {/* <!-- Divider between heading and content --> */}

            <div className="divider"></div>

            {/* <!-- About content flex container --> */}

            <div className="about-content">
                <div>
                    <img src="./images/self-portrait1.jpg" alt="Self-Portrait" />
                </div>
                <div className="about-paragraphs">
                    <p>Hi. My name is Jeff. I am a developer who strives for truly presentable applications. There is a
                        common thread throughout my life, which is that I have a methodology to the things I do. As a
                        Massage Therapist I was able to provide excellent work for my clients as a result of setting
                        myself up
                        correctly. I studied the inner workings of the body to a level of understanding that informed
                        the quality of work I gave. I set myself up with a framework that narrowed my focus down to
                        anatomical structures of the body, and the assessment of what those structures needed
                        therapeutically. Using this methodology ultimately allowed for my creativity and intuition to
                        shine. This work ethic is translated into my baking, gardening, music, and coding.
                    </p>
                    <p>This methodology is what allows me to thrive in the development of quality applications.
                        Functionality and presentation are linked together. Studying and internalizing the fundamentals
                        of programming allow for balance within my process. Through my experiences I have developed the
                        ability to empathize with people, and discover what their needs are. This is a skill that I find
                        valuable in the creation of web applications, as the end-users of the product will have needs,
                        such as accesibility and ease of use, that need met.</p>
                </div>
            </div>
        </section>
    );
}

export default About;