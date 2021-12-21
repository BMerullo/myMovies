import React, {useState, useEffect} from 'react';
import { Link } from '@reach/router';
import axios from 'axios'

const OneList= (props) =>{

    const { id } = props;
    const [listInformation, setListInformation] = useState([]) 
    //The movies are set as an array of ids so we need another state with the actual information of the movies
    const [movieList, setMovieList] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/lists/${id}`)
            .then((res)=>{
                console.log(res.data);
                setListInformation(res.data);
                findMovieNames();
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    const findMovieNames = () =>{
        setMovieList(listInformation.movies) //the movieList is being set to the array of ids and then it will be set to the movies themselves
        for(i = 0; i < movieList.length();i++){
            axios.get(`http://localhost:8000/api/movies/${movieList[i]}`)
                .then((res)=>{
                    movieList[i] = res.data;
                })
                .catch((err)=>{
                    console.log("there was an error", err);
                })
        }
    }

    const watchedMovieHandler = (e, watchedMovie) =>{
        watchedMovie.haveWatched = e.target.checked
        axios.put(`http://localhost:8000/api/movies/${e.target.id}`, watchedMovie) 
            .then((res)=>{
                console.log(res.data)
            })
            .catch((err)=> {
                console.log(err)
            })
    }

    return(
        <div>
            <h1>{listInformation.name}</h1>
            {
                listInformation.genre? <h3>{listInformation.genre}</h3>
                :null
            }
            {
                movieList.map((oneMovie, index)=>(
                    <div key={index}>
                        <label htmlFor='haveWatched'>{oneMovie.title}</label>
                        <input checked={oneMovie.haveWatched} type="checkbox" name="haveWatched" onChange={watchedMovieHandler(e, oneMovie)}></input>
                    </div>
                ))
            }
        </div>
    ) 
}

export default OneList;