import React from 'react';

function Secondary({ modalHandler }) {
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
    )
}

export default Secondary;