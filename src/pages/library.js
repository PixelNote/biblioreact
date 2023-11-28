import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authContext';


export default function Libray(){

  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
  }

  return (
    <Link to="/">
      <button onClick={()=> handleLogout()} className="logout">Logout</button>
    </Link>
  );

}