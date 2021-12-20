import React from 'react';
import { Link } from '@reach/router';

const AllMovies = (props) => {
    const {movies} = props;
console.log(movies)
    return (
        <div className='wrapper'>
            <div className='search'>
                <p>Search By Category</p>
                <select>
                    <option value='' defaultValue >Select</option>
                    <option></option>
                    <option></option>
                    <option></option>
                </select>
                <button className='searchButton'>Search</button>
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