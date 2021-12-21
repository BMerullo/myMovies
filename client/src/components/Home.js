import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Home = (props) =>{

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=76e97ee4b0b9bbd10b8a54f5b87265c0")
        .then((res)=>{
            console.log(res.data)
            setPopularMovies(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    return (
        <div className="App">
            <h1>Most Popular Movies: </h1>
            {
                popularMovies.map((movie, index)=>{
                <div key={index}>
                    <p>{movie.title}</p>
                </div>
                })
            }
        </div>
    );
}

export default Home;