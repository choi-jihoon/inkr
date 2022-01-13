import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <footer className={!sessionUser ? 'splash-page-footer' : 'logged-in-footer'}>
            {!sessionUser &&
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
            }
            <ul className='copyright'>
                <li className='footer-text'>
                    <a target="_blank" rel="noreferrer noopener"
                        href='https://github.com/choi-jihoon/inkr'>
                        © 2022 | Inkr
                    </a>
                </li>
                <ul className='about-me'>
                    <li className='footer-text'>
                        <Link to='/artists/3'>Fiona Choi</Link>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer noopener"
                            href='https://github.com/choi-jihoon'>
                            <i className='fab fa-github' />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer noopener"
                            href='https://www.linkedin.com/in/jihoon-choi-a6967a221/'>
                            <i className='fab fa-linkedin' />
                        </a>
                    </li>
                </ul>
            </ul>
        </footer>
    );
}

export default Footer;
