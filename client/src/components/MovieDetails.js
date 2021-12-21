import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../view/Header';

const MovieDetails = (props) => {
    const {id} = props;

    const [movie, setMovie] = useState({});
    const [myMovies, setMyMovies] = useState([]);
    
    useEffect(() => {

        // change URL
        axios.get(`http://localhost:8000/api/`)
            .then((res) => {
                setMovie(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const addMovie = () => {
        axios.post('http://localhost:8000/api/movies/' + movie._id, movie)
            .then(res => {
                console.log(res.data);
            });

        setMyMovies([...myMovies, movie._id]);
    }
    
    return (
        <div>
            <Header />
            <div className='wrapper' style={{alignItems: 'flex-end'}}>
                <div className='movieDetails'>
                    <div>
                        img
                        {/* movie image */}
                    </div>
                    <div>
                        <div>Title: {/* movie title */}</div>
                        <div>Genre: {/* movie genre */}</div>
                        <div>Year: {/* movie year */}</div>
                        <div>Other: {/* movie other */}</div>
                    </div>
                </div>
                <div>
                    <button className='addMovie' onClick={addMovie}>Add to myMovies</button>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;