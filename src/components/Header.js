import React from 'react';

function Header({ currentPage, pageChange }) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg d-flex justify-content-between">
                <h1 className="navbar-brand">Jeff Mullen</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon d-flex justify-content-center"><i className="fas fa-bars align-self-center"></i></span>
                </button>
                <div id="navbarSupportedContent" className="collapse navbar-collapse">
                    <ul className="nav-ul d-flex flex-column">
                        <li><a href="#about"
                            onClick={() => pageChange('About')}
                            className={currentPage === 'About' ? 'active' : ''}>About</a></li>
                        <li><a href="#applications"
                            onClick={() => pageChange('Applications')}
                            className={currentPage === 'Applications' ? 'active' : ''}>Portfolio</a></li>
                        <li><a href="#contact"
                            onClick={() => pageChange('Contact')}
                            className={currentPage === 'Contact' ? 'active' : ''}>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;