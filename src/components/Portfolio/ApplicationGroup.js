import React from 'react';
import Project from './Project';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import groveImg from '../../images/grove-resize.png';
import starBooksImg from '../../images/star-books.png';
import techBlogImg from '../../images/tech-blog.png';
import workoutImg from '../../images/workout-tracker.png';
import weatherImg from '../../images/weather-dashboard-resize.png';
import recipeImg from '../../images/recipe-repo.png';

function ApplicationGroup({ modalHandler, setModalShow }) {
    const applications = [
        {
            id: 1,
            title: 'Recipe Repo',
            deployed: 'https://desolate-atoll-16678.herokuapp.com/',
            github: 'https://github.com/jeffMullen/recipe-residence',
            image: recipeImg,
            tech: 'React, MongoDB, Express, Node, GraphQL, Bootstrap, SCSS',
            description: 'Designed for users to record their own recipes, search for recipes created by other users, and update each recipe to their own preferences. A way for families living at great distances to share recipes in our modern world.'
        },
        {
            id: 2,
            title: 'Grove',
            deployed: 'http://obscure-ocean-20287.herokuapp.com/',
            github: 'https://github.com/lapshaffer/SustainableReviewsProject',
            image: groveImg,
            tech: 'Handlebars, Chart.js, Bootstrap, Node, Express, JavaScript, CSS, express-session, jQuery, MySQL, Sequelize, dotenv, bycrypt',
            description: "A consumer lead review website to convey first-hand experience of a company's sustainability practices"
        },
        {
            id: 3,
            title: 'Star Books',
            deployed: 'https://az84.github.io/Star-Books/',
            github: 'https://github.com/az84/Project-1',
            image: starBooksImg,
            tech: 'JavaScript, jQuery, Zurb CSS Framework, Google Books API, New York Times API, CSS, HTML',
            description: 'Search for a topic and see book results'
        },
        {
            id: 4,
            title: 'Tech Blog',
            deployed: 'https://safe-castle-68945.herokuapp.com/',
            github: 'https://github.com/jeffMullen/tech-blog',
            image: techBlogImg,
            tech: 'JavaScript, Handlebars, Node, Sequelize, Express, Bootstrap',
            description: 'Tech forum in which a user can log in, write posts, comment on posts, and edit their own posts'
        },
        {
            id: 5,
            title: 'Workout Tracker',
            deployed: 'https://boiling-garden-95289.herokuapp.com/',
            github: 'https://github.com/jeffMullen/workout-tracker',
            image: workoutImg,
            tech: 'MongoDB, Mongoose, Express, Node, JavaScript, HTML, CSS',
            description: 'Exercise application that keeps track of previous workout statistics, as well as creating new workouts and exercises'
        },
        {
            id: 6,
            title: 'Weather Dashboard',
            deployed: 'https://jeffmullen.github.io/weather-dashboard/',
            github: 'https://github.com/jeffMullen/weather-dashboard',
            image: weatherImg,
            tech: 'JavaScript, jQuery, Open Weather API, Bootstrap CSS Framework, CSS, HTML',
            description: 'Search for weather by city'
        },
    ]

    return (
        <Row key="1" className="portfolio mt-5">

            {applications.map((project, index) => {
                return <Col key={index} className="col-12 col-md-6 col-xl-4 mb-3 d-flex justify-content-center"><Project index={index} project={project} modalHandler={modalHandler} setModalShow={setModalShow} /></Col>
            })}
        </Row>

    )
}

export default ApplicationGroup;