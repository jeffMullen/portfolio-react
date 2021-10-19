import React from 'react';

function Applications({ modalHandler }) {

    const applications = [
        {
            title: 'Star Books',
            deployed: 'https://az84.github.io/Project-1/',
            github: 'https://github.com/az84/Project-1',
            image: './images/star-books-application.png',
            tech: 'JavaScript, jQuery, Zurb CSS Framework, Google Books API, New York Times API, CSS, HTML',
            description: 'Search for a topic and see book results'
        },
        {
            title: 'Weather Dashboard',
            deployed: 'https://jeffmullen.github.io/weather-dashboard/',
            github: 'https://github.com/jeffMullen/weather-dashboard',
            image: './images/weather-dashboard-application.png',
            tech: 'JavaScript, jQuery, Open Weather API, Bootstrap CSS Framework, CSS, HTML',
            description: 'Search for weather by city'
        },
        {
            title: 'Day Planner',
            deployed: 'https://jeffmullen.github.io/day-planner/',
            github: 'https://github.com/jeffMullen/day-planner',
            image: './images/day-planner.png',
            tech: 'Moment.js, JavaScript, jQuery, Bootstrap CSS Framework, CSS, HTML',
            description: 'Plan your day by saving events to app'
        },
        {
            title: 'Placeholder',
            deployed: '#',
            github: '#',
            image: './images/shifaaz-shamoon-oR0uERTVyD0-unsplash.jpg',
            tech: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dignissimos'
        }
    ]

    return (

        <section id="applications" className="applications section-heading">
            {/* <!-- Applications section --> */}
            <h2>Applications</h2>

            {/* <!-- Divider between heading and content --> */}

            <div className="divider"></div>

            {/* <!-- Overall applications flexbox --> */}

            <div className="applications-content">

                {/* <!-- Largest image in flexbox --> */}

                <div id="premier">
                    <h3><span>Grove</span></h3>
                    {/* <!-- <a href="https://az84.github.io/Project-1/" target="_blank"></a> --> */}
                    <p>http://obscure-ocean-20287.herokuapp.com/</p>
                    <p>https://github.com/lapshaffer/SustainableReviewsProject</p>
                    <img onClick={modalHandler} data-toggle="modal" data-target="#application-modal" src="./images/grove.png"
                        alt="Connector to Star Books Application" />
                    <p>Handlebars, Chart.js, Bootstrap, Node, Express, JavaScript, CSS, express-session, jQuery, MySQL,
                        Sequelize, dotenv, bycrypt</p>
                    <p>A consumer lead review website to convey first-hand experience of a company's sustainability
                        practices</p>

                </div>

                {/* <!-- Smaller images of applications flexbox --> */}

                <div className="app-wrapper">
                    {applications.map((project) => (
                        <div>
                            <h3><span>{project.title}</span></h3>
                            <p>{project.deployed}</p>
                            <p>{project.github}</p>
                            <img onClick={modalHandler} data-toggle="modal" data-target="#application-modal"
                                src={project.image} alt={`Link to ${project.title} information`} />
                            <p>{project.tech}</p>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* <!-- Link Modal --> */}
            <div className="modal fade" tabindex="-1" id="application-modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title"></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body row">
                            {/* <!-- <p>Modal body text goes here.</p> --> */}
                        </div>
                        <div className="modal-footer row">

                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
}

export default Applications;