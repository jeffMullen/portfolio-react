import React from 'react';

function Premier({ modalHandler }) {
    const premier = {
        id: 1,
        title: 'Grove',
        deployed: 'http://obscure-ocean-20287.herokuapp.com/',
        github: 'https://github.com/lapshaffer/SustainableReviewsProject',
        image: './images/grove.png',
        tech: 'Handlebars, Chart.js, Bootstrap, Node, Express, JavaScript, CSS, express-session, jQuery, MySQL, Sequelize, dotenv, bycrypt',
        description: "A consumer lead review website to convey first-hand experience of a company's sustainability practices"
    }

    return (
        <div id="premier" key={premier.id}>
            <h3><span>{premier.title}</span></h3>
            <p>{premier.deployed}</p>
            <p>{premier.github}</p>
            <img onClick={() => modalHandler(premier.title, premier.deployed, premier.github, premier.tech, premier.description)} data-toggle="modal" data-target="#application-modal" src="./images/grove.png"
                alt={`Link to ${premier.title} information`} />
            <p>{premier.tech}</p>
            <p>{premier.description}</p>
        </div>
    )
}

export default Premier;