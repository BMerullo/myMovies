import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';






const EditProfile = (props) => {

    
        const [updatedUser, setUpdatedUser] = useState({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        });

        const [confirmReg, setConfirmReg] = useState('');
        const [errors, setErrors] = useState({});

        const handleChange = (e) => {
            setUpdatedUser({
                ...updatedUser,
                [e.target.name]: e.target.value
            });
        };

        useEffect(() => {
            axios
                .get(`http://localhost:8000/api/users/${localStorage.userId}`)
                .then((res) => {
                    console.log(res.data);
                    setUpdatedUser(res.data)
                })
                .catch((err) => console.log(err))
        }, [])

        const signUp = (e) => {
            e.preventDefault();
            axios
                .put(`http://localhost:8000/api/users/${localStorage.userId}`, updatedUser)
                .then((res) => {
                    console.log(res);
                    console.log(res.data);
                    navigate(`/main`)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        // const deleteFilter = (setupId) => {
        //     axios.delete(`http://localhost:8000/api/setups/${setupId}`)
        //         .then((res) => {
        //             console.log(res.data);
        //             navigate(`/user/${localStorage.userId}`)
        //         })
        //         .catch((err) => {
        //             console.log(err)
        //         })
        // }


        return (
            <div>
                <div className='wrapper' style={{ width: '700px', justifyContent: 'space-around', padding: '100px 0px', alignItems: 'baseline' }}>
                    <div>
                        <h1>myMovies</h1>
                    </div>
                    <form onSubmit={signUp} className='login'>
                        <h3 style={{marginBottom: "20px"}}>Update Profile</h3>
                        <div className='registerFields'>
                            <label>name</label><br />
                            <input type='text' name='username' value={updatedUser.username} onChange={(e) => handleChange(e)} />
                        </div>
                        {errors.username
                            ? <div className='errorMessageLog'>
                                *{errors.username.message}
                            </div>
                            : null}
                        <div className='registerFields'>
                            <label>email</label><br />
                            <input type='text' name='email' value={updatedUser.email} onChange={(e) => handleChange(e)} />
                        </div>
                        {errors.email
                            ? <div className='errorMessageLog'>
                                *{errors.email.message}
                            </div>
                            : null}
                        {/* <div className='registerFields'>
                            <label>password</label><br />
                            <input type='password' name='password' value='' onChange={(e) => handleChange(e)} />
                        </div>
                        {errors.password
                            ? <div className='errorMessageLog'>
                                *{errors.password.message}
                            </div>
                            : null}
                        <div className='registerFields'>
                            <label>confirm password</label><br />
                            <input type='password' name='confirmPassword' value='' onChange={(e) => handleChange(e)} />
                        </div>
                        {errors.confirmPassword
                            ? <div className='errorMessageLog'>
                                *{errors.confirmPassword.message}
                            </div>
                            : null} */}
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <button className='registerButton'>Update</button>
                        </div>
                        <hr className='divLine' />
                        <div style={{ textAlign: 'center' }}>
                            {/* <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                                <button className='loginButton' >Login</button>
                            </Link> */}
                        </div>
                    </form>
                </div>
            </div>

        )
    
}


export default EditProfile;