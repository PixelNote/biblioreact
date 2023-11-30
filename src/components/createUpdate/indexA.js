import React from "react";
import './index.css'

export default function Create(props) {

  return (
    <div className="page">
      <div className="add-form">
        <h1 className="add-title">{props.titleTop}</h1>
        <form id="add-form" className="form">
          <label className="form-label" htmlFor="name">
            Título
          </label>

          <input
            className="form-input"
            name="name"
            type="text"
            placeholder="El principito"
            required="required"
            onChange={(e) => {
              props.titleChange(e.target.value);
            }}
            value={props.title}
          /> 

          <label className="form-label" htmlFor="image">
            Portada
          </label>

          <input
            className="form-image"
            name="image"
            type="file"
            placeholder="El principito"
            required="required"
            onChange={(e) => {
              props.imageChange(e.target.files[0]);
            }}
          />

          <label className="form-label" htmlFor="author">
            Autor
          </label>

          <input
            className="form-input"
            name="author"
            type="text"
            placeholder="Antoine de Saint-Exupéry"
            required="required"
            onChange={(e) => {
              props.authorChange(e.target.value);
            }}
            value={props.author}
          />

          <label className="form-label" htmlFor="genre">
            Genero
          </label>

          <input
            className="form-input"
            name="genre"
            type="text"
            placeholder="Infantil"
            required="required"
            onChange={(e) => {
              props.genreChange(e.target.value);
            }}
            value={props.genre}
          />

          <label className="form-label" htmlFor="date">
            Año de publicación
          </label>

          <input
            className="form-input"
            name="date"
            type="number"
            placeholder="1943"
            required="required"
            onChange={(e) => {
              props.dateChange(e.target.value);
            }}
            value={props.date}
          />

          <button
            onClick={() => {
              props.buttonFunction(props.email, props.image, props.title, props.author, props.genre, props.date);
            }}
            type="button"
            form="add-form"
            className="form-button button-add"
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
