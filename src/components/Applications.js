import React from 'react';

function Applications() {


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
                    <img data-toggle="modal" data-target="#application-modal" src="./images/grove.png"
                        alt="Connector to Star Books Application" />
                    <p>Handlebars, Chart.js, Bootstrap, Node, Express, JavaScript, CSS, express-session, jQuery, MySQL,
                        Sequelize, dotenv, bycrypt</p>
                    <p>A consumer lead review website to convey first-hand experience of a company's sustainability
                        practices</p>

                </div>

                {/* <!-- Smaller images of applications flexbox --> */}

                <div className="app-wrapper">
                    <div>
                        <h3><span>Star Books</span></h3>
                        {/* <!-- <a href="https://az84.github.io/Project-1/" target="_blank"></a> --> */}
                        <p>https://az84.github.io/Project-1/</p>
                        <p>https://github.com/az84/Project-1</p>
                        <img data-toggle="modal" data-target="#application-modal"
                            src="./images/star-books-application.png" alt="Connector to Star Books Application" />
                        <p>JavaScript, jQuery, Zurb CSS Framework, Google Books API, New York Times API, CSS, HTML</p>
                        <p>Search for a topic and see book results</p>
                    </div>
                    <div>
                        <h3><span>Weather Dashboard</span></h3>
                        {/* <!-- <a href="https://jeffmullen.github.io/weather-dashboard/" target="_blank"></a> --> */}
                        <p>https://jeffmullen.github.io/weather-dashboard/</p>
                        <p>https://github.com/jeffMullen/weather-dashboard</p>
                        <img data-toggle="modal" data-target="#application-modal"
                            src="./images/weather-dashboard-application.png"
                            alt="Connector to Weather Dashboard application." />
                        <p>JavaScript, jQuery, Open Weather API, Bootstrap CSS Framework, CSS, HTML</p>
                        <p>Search for weather by city</p>

                    </div>
                    <div>
                        <h3><span>Day Planner</span></h3>
                        {/* <!-- <a href="https://jeffmullen.github.io/day-planner/" target="_blank"></a> --> */}
                        <p>https://jeffmullen.github.io/day-planner/</p>
                        <p>https://github.com/jeffMullen/day-planner</p>
                        <img data-toggle="modal" data-target="#application-modal" src="./images/day-planner.png"
                            alt="Connector to Day Planner application." />
                        <p>Moment.js, JavaScript, jQuery, Bootstrap CSS Framework, CSS, HTML</p>
                        <p>Plan your day by saving events to app</p>

                    </div>
                    <div>
                        <h3><span>Placeholder 2</span></h3>
                        <p>#</p>
                        <p>#</p>
                        <img data-toggle="modal" data-target="#application-modal"
                            src="./images/shifaaz-shamoon-oR0uERTVyD0-unsplash.jpg" alt="Ocean waves." />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dignissimos</p>

                    </div>
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