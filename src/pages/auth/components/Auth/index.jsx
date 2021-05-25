import React from 'react';
import './style.css';
// import './stul.less';

const Auth = () => {
    return (
    <div className='auth__wrapper'>
        <div className="auth">
            <form action="">
                <label htmlFor="auth__email">enter email</label>
                <input className='auth__email' id='auth__email' placeholder='email' type="text"/>
                <label htmlFor="auth__password">enter password</label>
                <input className='auth__password' id='auth__password' placeholder='password' type="text"/>
                <button>send</button>
            </form>
        </div>
    </div>
    )
};

export default Auth;