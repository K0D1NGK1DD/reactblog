import React from 'react';
import '../styles/LogIn.css';

function LogIn() {
    return (
        <div className='login'>
                <h1>Log In Here</h1>
                    <form className='login__form'>
                        <label for='email'>
                            <input type='email' placeholder='Enter email address' className='input'/>
                        </label>

                        <label for='password'>
                            <input type='password' placeholder='Enter password' className='input' />
                        </label>
                    </form> 
                    <button className='button'>Submit</button>
        </div>  
    )
}

export default LogIn;
