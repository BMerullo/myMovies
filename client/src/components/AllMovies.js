import React, { useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const AllMovies = (props) => {
    const {movies} = props;
    const [searchWord, setSearchWord] = useState('');
    const [searchResults, setSearchResult] = useState(false);
    
    const search = (e) => {
        console.log(searchWord);
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=76e97ee4b0b9bbd10b8a54f5b87265c0&query=${searchWord}`)
            .then(res => {
                console.log(res.data.results);
                setSearchResult(res.data.results);
            })
            console.log(searchResults);
    }

    return (
        <div className='wrapper' style={{display: 'block'}}>
            <div className='search'>
                <p>Search By Title</p>
                <input className='searchInput' type='text' placeholder='Search' onChange={(e) => setSearchWord(e.target.value)} />
                <button className='searchButton' onClick={search}>Search</button>
            </div>
            {
                searchResults
                ? <div>
                    <h1 style={{textAlign: 'center', margin: '30px 0px'}}>Search Results</h1>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {searchResults.map((result, index) => {
                            return (
                                <div key={index} className='oneMovie'>
                                    <Link to={`/movies/${result.id}`} style={{color: 'black', textDecoration: 'none'}}>
                                        <div style={{fontWeight: 'bold'}}>{result.title}</div>
                                        <img src={`http://image.tmdb.org/t/p/w500/${result.poster_path}`} alt='image' />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
                : null
            }
            <h1 style={{textAlign: 'center', margin: '30px 0px'}}>Popular Movies</h1>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {movies.map((movie, index) => {
                    return (
                        <div key={index} className='oneMovie'>
                            <Link to={`/movies/${movie.id}`} style={{color: 'black', textDecoration: 'none'}}>
                                <div style={{fontWeight: 'bold'}}>{movie.title}</div>
                                <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='img' />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllMovies;