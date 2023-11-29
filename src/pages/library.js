import React,  { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { getBooks } from '../services/firebaseService';


export default function Library(){

  const auth = useAuth();
  const navigate = useNavigate();

  const { email, displayName } = auth.user

  const [books, setBooks] = useState([])
  const [filteredBooks, setFilteredBooks] =  useState([])
  const [inputSearch, setInputSearch]  = useState('')


  useEffect(()=>{
    const fetchBooks = async () => {
      const fetchedBooks = await getBooks(email)
      setBooks(fetchedBooks)
    };
    fetchBooks()
    
  },[])

  useEffect(() => {
    if (inputSearch.trim() === "") {
      setFilteredBooks(books);
      console.log(filteredBooks)
    } else {
      const result = books.filter((book) => {
        return (
          book.title.toLowerCase().includes(inputSearch.toLowerCase()) ||
          book.author.toLowerCase().includes(inputSearch.toLowerCase())
        );
      });

      setFilteredBooks(result);
    }
  }, [inputSearch, books]);

  const filterList = (input) => {
    setInputSearch(input.trim() === "" ? "" : input);
  };
  


  const handleLogout = () => {
    auth.logout();
  }

  return (
    <div className="page">
      <div className="library-page">
        <div className="library-nav">
          <p className="library-title">Bienvenido, {displayName}</p>

          <input
            type="text"
            className="library-search"
            value={inputSearch}
            placeholder="Busca tu libro por titulo o autor"
            onChange={(e) => {
              filterList(e.target.value);
            }}
          ></input>

          <div className="library-buttons">
            <Link to="/library/add">
              <button className="library-addbook">Agregar un libro</button>
            </Link>
            <Link to="/">
              <button onClick={() => handleLogout()} className="library-logout">
                Cerrar sesión
              </button>
            </Link>
          </div>
        </div>
        <div className="library-books">
          {filteredBooks.map((element) => (
            <div className="book" key={element.id}>
              <img
                className="book-image"
                src={element.image}
                alt={`imagen de ${element.title}`}
              />
              <p className="book-title">{element.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}