import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllMovies from '../components/AllMovies';
import Header from '../view/Header';

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

        // change URL
        axios.get(' http://www.omdbapi.com/?i=tt3896198&apikey=87985706')
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

