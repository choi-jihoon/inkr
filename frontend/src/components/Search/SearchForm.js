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

        setSearchQuery('');

        history.push(`/search/${searchQuery}`)
    }


    return (
        <form className='search-bar right-container-element' onSubmit={handleSearch}>
            <button
                className='search-button'
                type="submit"
            >
                <i id="search-icon" className="fas fa-search"></i>
            </button>
            <input
                className='search-input'
                type="text"
                value={searchQuery}
                placeholder="Search ink by tag"
                onChange={(e) => setSearchQuery(e.target.value)}
            >
            </input>
        </form>
    );
}

export default SearchForm;
