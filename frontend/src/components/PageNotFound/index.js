import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './PageNotFound.css';

export default function PageNotFound() {
    const history = useHistory();


    useEffect(() => {
        setTimeout(() => {
            history.push('/')
        }, 2000)
    }, [])


    return (
        <div className='page-not-found'>
            <h2 id='nothing-to-see'>Whoops! Nothing to see here.</h2>
            <p>Redirecting you. I hope we don't meet again.</p>
        </div>
    )
}
