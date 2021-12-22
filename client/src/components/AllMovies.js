import React from 'react';
import { Link } from '@reach/router';

const AllMovies = (props) => {
    const {movies, submitHandler} = props;
    
    return (
        <div className='wrapper' style={{display: 'block'}}>
            <div className='search'>
                <p>Search By Category</p>
                <select>
                    <option value='' defaultValue >Select</option>
                    <option value= 't'>Title</option>
                    <option value='genre'>Genre</option>
                    <option></option>
                </select>
                <button className='searchButton' onClick={submitHandler}>Search</button>
            </div>
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