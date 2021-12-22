import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Header = () => {
    const [userId, setUserId] = useState('');

    const logout = (e) => {
        e.preventDefault();
        axios.post(
                'http://localhost:8000/api/users/logout',{},
                {
                    withCredentials: true
                }
            )
            .then((res) => {
                console.log(res.data);
                localStorage.removeItem("userId");

                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        setUserId(localStorage.getItem('userId'));
    }, [])

    return (
        <div className='header'>
            <div>
                <Link to={'/main'} className='logo'>
                    <h1>myMovies</h1>
                </Link>
                <Link to={`/lists/${localStorage.userId}`} className='links'>my movie list</Link>
            </div>
            <div style={{width: '170px', alignItems: 'center'}}>
                {
                    userId
                    ? <Link to={`/edit/${localStorage.userId}`} className='links'>edit user info</Link>
                    : null
                }
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default Header;