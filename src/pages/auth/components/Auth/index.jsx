import React from 'react';
import './style.css';

const Auth = () => {
    return (
    <div className='auth__wrapper'>
        <label htmlFor="auth__email">enter email</label>
        <input className='auth__email' id='auth__email' placeholder='email' type="text"/>
        <label htmlFor="auth__password">enter password</label>
        <input className='auth__password' id='auth__password' placeholder='password' type="text"/>
    </div>
    )
};

export default Auth;