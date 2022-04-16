import React from 'react'
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { logout } from '../actions/actionLogin';


const Contenido = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
    
    navigate('/login')

  }

  return (
    <div>
      <button>Comprar</button>
      <h1>Holla</h1>
      <h1>Holla</h1>
      <h1>Holla</h1>
      <h1>Holla</h1>
      <h1>Holla</h1>

      <button
        onClick={handleLogout}
      >Logout
      </button>
    </div>
  )
}

export default Contenido