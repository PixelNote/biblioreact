import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getBook, deleteBook } from '../../services/firebaseService';
import { useAuth } from '../../context/authContext';
import './index.css'

export default function Book(){

  const auth = useAuth();
  const { email } = auth.user;

  const navigate = useNavigate()

  const [book, setBook] = useState([]);

  const { title } = useParams();

  useEffect(()=>{

    const fetchBook = async()=>{
      const result = await getBook(email,title) 
      setBook(result)
    }
    fetchBook()

  },[])

  return (
    <div className="page">
      <Link to="/library">
        <button className="back-button">
          <span class="material-symbols-outlined">chevron_left</span>Volver
        </button>
      </Link>
      <div className="book-show">
        <div className="book-content">
          <div className="book-content-info">
            <p className="book-content-titles">Título</p>
            <p className="book-content-description">{book.title}</p>
            <p className="book-content-titles">Autor</p>
            <p className="book-content-description">{book.author}</p>
            <p className="book-content-titles">Genero</p>
            <p className="book-content-description">{book.genre}</p>
            <p className="book-content-titles">Año de publicación</p>
            <p className="book-content-description">{book.date}</p>
          </div>
          <img
            className="book-content-image"
            src={book.image}
            alt={`iamgen de ${book.title}`}
          /> 
        </div>
        <div className="book-buttons">
          <Link to={`/library/books/update/${title}`}>
            <button className="button-update">Actualizar</button>
          </Link>
          <button className="button-delete" onClick={async ()=>{
            await deleteBook(email,book.title)
            alert('Libro eliminado con exito')
            navigate('/library')
            
          }}>Eliminar</button>
        </div>
      </div>
    </div>
  );
}