import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <ul className="foot-stuff">
                <li>React</li>
                <li>Redux</li>
                <li>Javascript</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JSON API</li>
                <li>Git</li>
            </ul>
            <div className='copyright'>
                © 2021 | Inkr
            </div>
        </footer>
    );
}

export default Footer;
