import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function NavBar(props){

  return (
    <nav className="navbar">
      {props.displayName && (
        <p className="nav-user">Bienvenido, {props.displayName}</p>
      )}
      <div className="nav-brand">
        <img className="nav-logo" src="images/book.png" alt="logo-title" />
        <h1 className="nav-title">
          <span className="title-1">Read</span>
          <span className="title-2">lify</span>{" "}
        </h1>
      </div>
      {props.displayName ? (
        <Link to="/libray">
          <button className='nav-signin'>Acceder</button>
        </Link>
      ) : (
        <div className="nav-buttons">
          <Link to="/signup">
            <button className="nav-signup">Registrarse</button>
          </Link>
          <Link to="/signin">
            <button className="nav-signin">Iniciar Sesión</button>
          </Link>
        </div>
      )}
    </nav>
  );
}