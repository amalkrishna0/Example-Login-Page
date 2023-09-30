import React from 'react'
import { Link } from 'react-router-dom'

export default function Button() {
    return (
        <div className='button-and-login'>
            <div className='button-main'>
                <button>LOGIN</button>
            </div>
            <div className="register">
                <Link to='/register'>
                    No Account? Sign In
                </Link>
            </div>
        </div>
    )
}
