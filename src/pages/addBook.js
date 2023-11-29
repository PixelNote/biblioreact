import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { saveBook } from "../services/addService";
import { Link } from "react-router-dom";
import CreateUpdate from "../components/createUpdate";
import '../components/createUpdate/index.css'

export default function AddBook() {

  const auth = useAuth();

  const navigate = useNavigate();

  const { email } = auth.user

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


  return (
    <div className="page">
      <Link to="/library">
        <button className="back-button">
          <span class="material-symbols-outlined">chevron_left</span>Volver
        </button>
      </Link>
      <CreateUpdate
        titleTop="Agregar  un libro"
        buttonText="Añadir"
        titleChange={handleTitleChange}
        imageChange={handleImageChange}
        authorChange={handleAuthorChange}
        genreChange={handleGenreChange}
        dateChange={handleDateChange}
        email={email}
        image={image}
        title={title}
        author={author}
        genre={genre}
        date={date}
        buttonFunction={saveBook}
      />
    </div>
  );
}
