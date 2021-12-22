import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllMovies from '../components/AllMovies';
import Header from '../view/Header';

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

        // change URL
        axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=76e97ee4b0b9bbd10b8a54f5b87265c0')
            .then(res => {
                setMovies(res.data.results);
                setLoaded(true);
                console.log(res.data.results);
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

