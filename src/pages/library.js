import React,  { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';


export default function Libray(){

  const auth = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if(auth.user===""){
      navigate('/')

   }
  }, [auth.user]);

  const handleLogout = () => {
    auth.logout();
  }
  

  return (
    <div className="page">
      <div className="library-buttons">
        <Link to="/">
          <button onClick={() => handleLogout()} className="library-logout">
            Logout
          </button>
        </Link>
        <Link to="/library/add">
          <button className="library-addbook">Agregar un libro</button>
        </Link>
      </div>
    </div>
  );
}