import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../view/Header';
import { navigate } from '@reach/router';

const MovieDetails = (props) => {
    const {id} = props;

    const [movie, setMovie] = useState({});
    const [myMovies, setMyMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    const [userId, setUserId] = useState('');
    
    useEffect(() => {
        setUserId(localStorage.getItem('userId'));
    }, []);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=76e97ee4b0b9bbd10b8a54f5b87265c0&language=en-US`)
            .then((res) => {
                setMovie(res.data);
                console.log(res.data);
                setGenres(res.data.genres);
            })
            .catch((err) => console.log(err));
    }, []);

    const addMovie = () => {
        let title = movie.title;
        let imdbID = id;
        axios.post('http://localhost:8000/api/lists/movie/' + id, {title, imdbID}, {withCredentials: true})
            .then(res => {    
                console.log(res.data);
                navigate(`/lists/${userId}`)
            })
            .catch(err => console.log(err));
            setMyMovies([...myMovies, movie.id]);
    }
    
    return (
        <div>
            <Header />
            <div className='wrapper' style={{alignItems: 'flex-end'}}>
                <div className='movieDetails'>
                    <div>
                        <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='image' style={{width: '300px'}}/>
                    </div>
                    <div>
                        <div style={{fontWeight: 'bold', fontSize: '20px', marginBottom: '30px'}}>{movie.title}</div>
                        <div><p>Genres:</p> 
                        {genres.map((genre, index) => {
                            return (
                                <div key={index}>
                                    {genre.name}
                                </div>
                            )
                        })}
                        </div>
                        <div><p>Release Date:</p> {movie.release_date}</div>
                        <div><p>Votes:</p> {movie.vote_average}</div>
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