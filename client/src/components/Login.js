import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const login = (e) => {
        e.preventDefault();
        
        axios.post(
                "http://localhost:8000/api/users/login",
                {
                    email: email,
                    password: password,
                },
                {
                    withCredentials: true,
                },
            )
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('userId', res.data.userId);
                localStorage.setItem('userLoggedIn', res.data.userLoggedIn);
                navigate("/main", { state: { idForNav: res.data.userId } });
            })
            .catch((err) => {
                console.log(err.response.data);
                setErrorMessage(err.response.data.message);
            });

        setEmail();
    };

    return (
        <div className='wrapper' style={{ width: '700px', justifyContent: 'space-around', padding: '100px 0px', alignItems: 'baseline'}}>
            <div>
                <h1>myMovies</h1>
            </div>
            <form onSubmit={login} className='login'>
                <div className='loginFields'>
                    <label>email</label><br/>
                    <input type='text' name='email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='loginFields'>
                    <label>password</label><br/>
                    <input type='password' name='password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <p className='errorMessageLog'>{
                errorMessage 
                ? <p>*{errorMessage}</p> 
                : null}</p>
                <div style={{textAlign: 'center', marginTop: '10px'}}>
                    <button className='loginButton'>Login</button>
                </div>
                <hr className='divLine' />
                <div style={{textAlign: 'center'}}>
                    <Link to='/register' style={{textDecoration: 'none', color: 'black'}}>
                        <button className='registerButton'>Register</button>
                    </Link>
                </div>
            </form>
    </div>
    )
}

export default Login;