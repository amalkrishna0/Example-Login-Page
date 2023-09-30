import React from 'react'
import { useState } from "react"
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const handleClick = (e) => {
        e.preventDefault()
        const userData = {
            name,
            username,
            password,
        };

        axios.post('http://localhost:4000/register', { name, username, password }).
            then(result => console.log(result))
            .catch((error) => {
                // Handle error
                if (error.response) {
                    // The request was made, but the server responded with an error status code (e.g., 404, 500)
                    console.error('Error status code:', error.response.status);
                    console.error('Error data:', error.response.data);
                } else if (error.request) {
                    // The request was made, but no response was received
                    console.error('No response received:', error.request);
                } else {
                    // Something else happened while setting up the request
                    console.error('Error:', error.message);
                }
            })
        // const response = await fetch('/register', {
        //     method: 'POST',
        //     body: JSON.stringify(userData),
        //     headers: {
        //         "Content-Type": 'application/json'
        //     }
        // })
        // const json = await response.json()


        // if (!response.ok) {
        //     setError(json.error)
        // }
        // if (response.ok) {
        //     setError(null)
        //     setUsername('')
        //     setName('')
        //     setPassword('')
        //     console.log("New User added", json)
        // }
    }
    return (
        <div className='form'>
            <form onSubmit={handleClick}>
                <div className='form-tab-register' >
                    <label className='name-label'>Name</label>
                    <input
                        className='name-input'
                        type="text"
                        placeholder='Enter Name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}>
                    </input>
                    <label className='username-label'>Username</label>
                    <input
                        className='username-input'
                        type="text"
                        placeholder='Enter Username'
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}>
                    </input>
                    <label className='password-label'>Password</label>
                    <input
                        className='password-input'
                        type="text"
                        placeholder='Enter Password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}>
                    </input>
                    <div className="button-register">
                        <button className='button-main'>Register</button>
                    </div>

                </div>
            </form>

        </div>

    )
}
export default Register;