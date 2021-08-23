import React from 'react'

export default function Login() {
    return (
        <form className='formContainer'>
            <h2>User Login</h2>
                <div className='userInput'>
                        <input
                            name='username'
                            ud='username'
                            type='text'
                            placeholder='Username'
                        />
                </div>
                <div className='userInput'>
                        <input
                            name='password'
                            id='password'
                            type='text'
                            placeholder='Password'
                        />
                </div>
                <div className='userSubmitBtn'>
                    <button>Submit</button>
                </div>
        </form>
    )
}