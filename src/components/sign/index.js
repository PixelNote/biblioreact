import React from 'react';
import './index.css';
import { Link } from 'react-router-dom'

const Sign = (props) => {

  const userSignUp = () =>{
    if(props.title==='Regístrate'){
      return (
        <>
          <label className="form-label" htmlFor='name'>
            Nombre
          </label>
          <input
            className="form-input"
            name="name"
            type="text"
            placeholder="Tu nombre"
            onChange={(e) => {
              props.nameChange(e.target.value);
            }}
            value={props.name}
            required = 'required'
          />
        </>
      );
    };
  }


  return (
    <>
      <div className="brand">
        <img className="brand-logo" src="images/book.png" alt="Readlify" />
        <h1 className="brand-title">
          <span className="title-1">Read</span>
          <span className="title-2">lify</span>
        </h1>
      </div>
      <div className="sign">
        <div className="sign-left">
          <div className="left">
            <div className="left-titles">
              <p className="left-title">{props.title}</p>
              <p className="left-subtitle">{props.subtitle}</p>
            </div>
            <form id="sign-form" className="form">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-input"
                name="email"
                type="email"
                placeholder="correo@ejemplo.com"
                onChange={(e) => {
                  props.emailChange(e.target.value);
                }}
                value={props.email}
                required="required"
              />
              {userSignUp()}
              <label className="form-label" htmlFor="password">
                Contraseña
              </label>
              <input
                className="form-input"
                name="password"
                type="password"
                placeholder="•••••••••••••••••"
                onChange={(e) => {
                  props.passwordChange(e.target.value);
                }}
                value={props.password}
                required="required"
              />
              {props.error && <p className="form-error">{props.error}</p>}
              <button
                onClick={props.sign}
                type="button"
                form="sign-form"
                className="form-button"
              >
                {props.button}
              </button>
            </form>
            <p className="left-context">
              {props.context}
              <Link to={props.linkFooter} className="context-link">
                {props.textLink}
              </Link>
            </p>
          </div>
        </div>
        <div className="sign-right">
          <div className="right-quote">
            <span className="quote-mark mark-1">"</span>
            <span className="quote">
              Un libro debe ser el hacha que rompa el mar helado que hay dentro
              de nosotros.
            </span>
            <p className="quote-author"> - Franz Kafka</p>
          </div>
          <img
            src="/images/woman.png"
            className="right-image"
            alt="woman reading a book"
          />
        </div>
      </div>
    </>
  );

}



export default Sign;
