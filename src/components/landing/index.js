import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function Landing(props){

  return(
    <div className='landing'>
      <div className='land-content'>
        <h2 className='land-content-title'>
          Gestiona tus libros sin problema
        </h2>
        <p className='land-content-text'>
          Readlify es una plataforma que te permite guardar, 
          consultar, editar y eliminar todos tus libros. 
        </p>
        <Link to={props.buttonUrl}><button className='land-button'>
          {props.buttonText}
        </button></Link>
      </div>
      <div className='land-image'>
        <img src='images/man.png' alt='man with a book'/>
      </div>
    </div>
  )
}