import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='form'>
            <form>
                <div className='form-tab-login'>
                    <label className='username-label'>Username</label>
                    <input className='username-input' type="text" placeholder='Enter Username'></input>
                    <label className='password-label'>Password</label>
                    <input className='password-input' type="text" placeholder='Enter Password'></input>
                </div>
            </form>
            <div className="forget-password">
                <Link to='/register'>
                    ?Forget Password
                </Link>
            </div>
            
        </div>
    )
}

export default Login