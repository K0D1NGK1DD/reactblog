import React from 'react';
import '../styles/SignUp.css';

function SignUp() {
    return (
        <div className='register'>
                <h1>Sign Up</h1>
                    <form className='register__form'>
                        <label for='name'>
                            <input type='text' placeholder='Enter full name' className='input'/>
                        </label>

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

export default SignUp;

