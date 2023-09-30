import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/login' className="back-button"
      />
      <h1>Register</h1>
    </div>
  )
}
