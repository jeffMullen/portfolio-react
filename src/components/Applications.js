import React from 'react';

function Applications({ modalHandler }) {

    const premier = {
        id: 1,
        title: 'Grove',
        deployed: 'http://obscure-ocean-20287.herokuapp.com/',
        github: 'https://github.com/lapshaffer/SustainableReviewsProject',
        image: './images/grove.png',
        tech: 'Handlebars, Chart.js, Bootstrap, Node, Express, JavaScript, CSS, express-session, jQuery, MySQL, Sequelize, dotenv, bycrypt',
        description: "A consumer lead review website to convey first-hand experience of a company's sustainability practices"
    }

    const applications = [
        {
            id: 2,
            title: 'Star Books',
            deployed: 'https://az84.github.io/Project-1/',
            github: 'https://github.com/az84/Project-1',
            image: './images/star-books-application.png',
            tech: 'JavaScript, jQuery, Zurb CSS Framework, Google Books API, New York Times API, CSS, HTML',
            description: 'Search for a topic and see book results'
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            deployed: 'https://jeffmullen.github.io/weather-dashboard/',
            github: 'https://github.com/jeffMullen/weather-dashboard',
            image: './images/weather-dashboard-application.png',
            tech: 'JavaScript, jQuery, Open Weather API, Bootstrap CSS Framework, CSS, HTML',
            description: 'Search for weather by city'
        },
        {
            id: 4,
            title: 'Day Planner',
            deployed: 'https://jeffmullen.github.io/day-planner/',
            github: 'https://github.com/jeffMullen/day-planner',
            image: './images/day-planner.png',
            tech: 'Moment.js, JavaScript, jQuery, Bootstrap CSS Framework, CSS, HTML',
            description: 'Plan your day by saving events to app'
        },
        {
            id: 5,
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

                <div id="premier" key={premier.id}>
                    <h3><span>{premier.title}</span></h3>
                    <p>{premier.deployed}</p>
                    <p>{premier.github}</p>
                    <img onClick={() => modalHandler(premier.title, premier.deployed, premier.github, premier.tech, premier.description)} data-toggle="modal" data-target="#application-modal" src="./images/grove.png"
                        alt={`Link to ${premier.title} information`} />
                    <p>{premier.tech}</p>
                    <p>{premier.description}</p>
                </div>

                {/* <!-- Smaller images of applications flexbox --> */}

                <div className="app-wrapper">
                    {applications.map((project) => (
                        <div key={project.id}>
                            <h3><span>{project.title}</span></h3>
                            <p>{project.deployed}</p>
                            <p>{project.github}</p>
                            <img onClick={() => modalHandler(project.title, project.deployed, project.github, project.tech, project.description)} data-toggle="modal" data-target="#application-modal"
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
                            <a id="liveApp" href="placeholder" className="col-6" target="_blank">Live Application</a>
                            <a id="gitHubRepo" href="placeholder" className="col-6" target="_blank">GitHub Repository</a>
                        </div>
                        <div className="modal-footer row">
                            <p id="techUsed" className="col-12"></p>
                            <p id="projectDescription" className="col-12"></p>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
}

export default Applications;