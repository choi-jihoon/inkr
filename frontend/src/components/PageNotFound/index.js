import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './PageNotFound.css';

export default function PageNotFound() {
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push('/')
        }, 3000)
    }, [])

    return (
        <div className='page-not-found'>
            <div className='page-not-found-body'>
                <h2 id='nothing-to-see'>Whoops! Nothing to see here.</h2>
                <p>Redirecting you. You probably need to log in to access this page.</p>
                <p>That or you put in a random url and by chance, it doesn't exist.</p>
            </div>
        </div>
    )
}
