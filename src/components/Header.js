import React from 'react';

function Header({ currentPage, pageChange }) {
    return (
        <header>
            <h1>Jeff Mullen</h1>
            <nav>
                <ul>
                    <li><a href="#about"
                        onClick={() => pageChange('About')}
                        className={currentPage === 'About' ? 'active' : ''}>About</a></li>
                    <li><a href="#skills"
                        onClick={() => pageChange('Skills')}
                        className={currentPage === 'Skills' ? 'active' : ''}>Skills</a></li>
                    <li><a href="#applications"
                        onClick={() => pageChange('Applications')}
                        className={currentPage === 'Applications' ? 'active' : ''}>Applications</a></li>
                    <li><a href="#contact"
                        onClick={() => pageChange('Contact')}
                        className={currentPage === 'Contact' ? 'active' : ''}>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;