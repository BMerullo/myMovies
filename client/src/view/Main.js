import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllMovies from '../components/AllMovies';
import Header from '../view/Header';
import { Link } from '@reach/router';

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/movies')
            .then(res => {
                setMovies(res.data);
                setLoaded(true);
                console.log(res.data);
            })
    }, []);

    return (
        <div>
            <Header />
            <div>
                {loaded && <AllMovies movies={movies} />}
            </div>
        </div>
    )
}

export default Main;