import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='pt-3 pb-3'>
        <h4>usuario@mail.com</h4>
        <Link to="/" className="btn btn-secondary">Cerrar sesión</Link>
    </div>
  )
}

export default Profile
