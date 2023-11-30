import React, { useState, useEffect } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, useParams } from "react-router-dom";
import { updateBook } from "../services/firebaseService";
import { Link } from "react-router-dom";
import Update from "../components/createUpdate/indexU";
import { getBook } from "../services/firebaseService";
import '../components/createUpdate/index.css'

export default function UpdateBook() {

  const auth = useAuth();

  const navigate = useNavigate();

  const { email } = auth.user

  const { titleBook } = useParams();


  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");

const handleTitleChange = (title) => {
  setTitle(title);
};

const handleAuthorChange = (author) => {
  setAuthor(author);
};

const handleImageChange = (image) => {
  setImage(image)
};

const handleGenreChange = (genre) => {
  setGenre(genre);
};

const handleDateChange = (date) => {
  setDate(date);
};

useEffect(() => {
  const fetchBook = async () => {
    const result = await getBook(email, titleBook);
    setTitle(result.title);
    setAuthor(result.author);
    setGenre(result.genre);
    setDate(result.date);
  };
  fetchBook();
}, []);





  return (
    <div className="page">
      <Link to="/library">
        <button className="back-button">
          <span class="material-symbols-outlined">chevron_left</span>Volver
        </button>
      </Link>
      {title && <Update
        titleTop="Actualizar"
        buttonText="Actualizar"
        titleChange={handleTitleChange}
        imageChange={handleImageChange}
        authorChange={handleAuthorChange}
        genreChange={handleGenreChange}
        dateChange={handleDateChange}
        email={email}
        image={image}
        currentTitle={titleBook}
        title={title}
        author={author}
        genre={genre}
        date={date}
        buttonFunction={updateBook}
      />}
    </div>
  );
}
