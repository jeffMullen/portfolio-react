import React from 'react';
import Project from './Project';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ApplicationGroup({ modalHandler }) {
    const applications = [
        {
            id: 1,
            title: 'Grove',
            deployed: 'http://obscure-ocean-20287.herokuapp.com/',
            github: 'https://github.com/lapshaffer/SustainableReviewsProject',
            image: './images/grove.png',
            tech: 'Handlebars, Chart.js, Bootstrap, Node, Express, JavaScript, CSS, express-session, jQuery, MySQL, Sequelize, dotenv, bycrypt',
            description: "A consumer lead review website to convey first-hand experience of a company's sustainability practices"
        },
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
        <Row className="portfolio mt-5">

            {applications.map((project) => {
                return <Col className="col-12 mb-3 d-flex justify-content-center"><Project project={project} modalHandler={modalHandler} /></Col>
            })}
        </Row>

    )
}

export default ApplicationGroup;