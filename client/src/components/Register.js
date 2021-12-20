import React, { useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Register = (props) => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [confirmReg, setConfirmReg] = useState('');
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const signUp = (e) => {
        e.preventDefault();

        axios.post(
                "http://localhost:8000/api/users/register",
                user, 
                {
                    withCredentials: true,
                },
            )
            .then((res) => {
                console.log(res.data);
                setUser({
                    userName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
                setConfirmReg(
                    "You have successfully registered!",
                );
                setErrors({});
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div className='wrapper' style={{ width: '700px', justifyContent: 'space-around', padding: '100px 0px', alignItems: 'baseline'}}>
            <div>
                <h1>myMovies</h1>
            </div>
            <form onSubmit={signUp} className='login'>
                <div className='registerFields'>
                    <label>name</label><br/>
                    <input type='text' name='username' value={user.username} onChange={(e) => handleChange(e)} />
                </div>
                {errors.username 
                ? <div className='errorMessageLog'>
                    *{errors.username.message}
                </div>
                : null}
                <div className='registerFields'>
                    <label>email</label><br/>
                    <input type='text' name='email' value={user.email} onChange={(e) => handleChange(e)} />
                </div>
                {errors.email 
                ? <div className='errorMessageLog'>
                    *{errors.email.message}
                </div>
                : null}
                <div className='registerFields'>
                    <label>password</label><br/>
                    <input type='password' name='password' value={user.password} onChange={(e) => handleChange(e)} />
                </div>
                {errors.password 
                ? <div className='errorMessageLog'>
                    *{errors.password.message}
                </div>
                : null}
                <div className='registerFields'>
                    <label>confirm password</label><br/>
                    <input type='password' name='confirmPassword' value={user.confirmPassword} onChange={(e) => handleChange(e)} />
                </div>
                {errors.confirmPassword 
                ? <div className='errorMessageLog'>
                    *{errors.confirmPassword.message}
                </div>
                : null}
                <div style={{textAlign: 'center', marginTop: '20px'}}>
                    <button className='registerButton'>Register</button>
                </div>
                <hr className='divLine' />
                <div style={{textAlign: 'center'}}>
                    <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
                        <button className='loginButton'>Login</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Register;