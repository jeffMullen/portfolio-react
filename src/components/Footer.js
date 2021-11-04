import React from 'react';

import gitHubImg from '../images/github-logo-2.png';
import linkedInImg from '../images/linkedin.svg';
import twitterImg from '../images/twitter.svg';

function Footer() {
    return (
        <footer className="py-5 d-flex justify-content-center">

            <a className="px-3" href="https://github.com/jeffMullen" rel="noreferrer" target="_blank"><img src={gitHubImg} width="40" alt="github link"></img></a>
            <a className="px-3" href="https://linkedin.com/in/jeff-mullen27" rel="noreferrer" target="_blank"><img src={linkedInImg} width="40" alt="linked in link"></img></a>
            <a className="px-3" href="https://twitter.com/JeffMul70036269" rel="noreferrer" target="_blank"><img src={twitterImg} width="40" alt="twitter link"></img></a>
        </footer>
    )
}

export default Footer;