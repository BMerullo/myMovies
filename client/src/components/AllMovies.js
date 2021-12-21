import React from 'react';
import { Link } from '@reach/router';

const AllMovies = (props) => {
    const {movies, submitHandler} = props;
    
    return (
        <div className='wrapper'>
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
            <div>
                {/* {movies.map((movie, index) => {
                    return (
                        <div key={index}>
                            <Link to={'/'}>
                                {movie.title}
                                {movie.image}
                            </Link>
                        </div>
                    )
                })} */}
            </div>
        </div>
    )
}

export default AllMovies;