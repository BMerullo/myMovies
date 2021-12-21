import React, {useState, useEffect} from 'react';
import { Link } from '@reach/router';
import axios from 'axios'

const AllLists = (props)=>{

    const [userLists, setUserLists] = useState([]);
    const { userId } = props; //the id of the user that is logged in
    
    //getting all lists from user
    useEffect(()=>{
        axios.get( `http://localhost:8000/api/my-lists/${userId}`)
            .then((res)=>{
                console.log(res.data);
                setUserLists(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    return(
        <div>
            {
                userLists.map((list, index) =>(
                    <div key={index}>
                        <Link to={`/lists/${list.id}`}>{list.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default AllLists