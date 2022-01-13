import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loadSearchResults } from '../../store/search';


import './SearchForm.css';

function SearchForm() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();

        const payload = {
            searchQuery
        }

        dispatch(loadSearchResults(payload))

        history.push('/search')
    }


    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={searchQuery}
                placeholder="Search ink by tag"
                onChange={(e) => setSearchQuery(e.target.value)}
            >
            </input>
            <button
                className='search-button'
                type="submit"
            >
                Search
            </button>
        </form>
    );
}

export default SearchForm;
