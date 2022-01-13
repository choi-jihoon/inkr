import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import MyPortfolioImageDetail from '../MyPortfolioImageDetail';
import ImageDetail from '../ImageDetail';


function Search() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const { searchQuery } = useParams();

    const searchObject = useSelector(state => state.search);
    const results = Object.values(searchObject);

    return (
        <div className='main-container'>
            {results.length ? (
                <>
                    <div className='search-title'>
                        <h2 id='search-title'>Search results for "{`${searchQuery}`}"</h2>
                    </div>
                    <div className='all-images-container'>
                        {results?.map((image) => {
                            let tagString;
                            if (image.tags) {
                                tagString = image.tags;
                                tagString = tagString.map((tag) => `#${tag}`);
                                tagString = tagString.join(', ');
                            }

                            if (image.userId === sessionUser.id) {
                                return <MyPortfolioImageDetail key={image.id} image={image} tagString={tagString} />
                            }

                            return <ImageDetail key={image.id} image={image} tagString={tagString} />
                        }
                        )}
                    </div>
                </>
            )
                :
                (
                    <>
                        <div className='no-search-results-title-container'>
                            <h2 id='no-results-title'>No results for "{`${searchQuery}`}"</h2>
                        </div>
                    </>
                )}

        </div>
    )
}

export default Search;
