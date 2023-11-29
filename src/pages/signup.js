import React, { useState,  useEffect } from 'react';
import { useAuth } from "../context/authContext";
import { useNavigate } from 'react-router-dom';
import Sign from '../components/sign/index';

import "../App.css";


export default function SignUp(){


  const auth = useAuth()
  const navigate = useNavigate();
  
  const [error, setError] = useState('');

  const [ emailRegister, setEmailRegister ] = useState("");

  const [ passwordRegister, setPasswordRegister ] = useState('');

  const [ nameRegister, setNameRegister ] = useState('');

  useEffect(() => {
    if (auth.user) {
      navigate("/library");
    }
  }, [auth.user]);

  const handleEmailChange = (email) => {
    setEmailRegister(email);
  }

  const handlePasswordChange = (password) =>{
    setError('')
    setPasswordRegister(password);
  }

  const handleNameChange = (name) => {
    setNameRegister(name);
  };

  const handleRegister = () =>{
    const regex = new RegExp(
      "(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$"
    );
    if(!regex.test(passwordRegister)){
        setError(
          "La contraseña debe ser mayor a 8 carácteres, debe contener al menos una mayuscula, minuscula, número y carácter especial."
        );
    } else if(emailRegister && nameRegister) {
      setError("");
      auth.register(emailRegister, nameRegister, passwordRegister);
      navigate("/signin");
    }else{
      setError(
        "Completa los campos."
      );
    }

  }

  return(
    <div className='page'>
      <Sign 
        title="Regístrate"
        subtitle="Crea una nueva cuenta"
        button='Registrarse'
        context="Ya tienes una cuenta?"
        linkFooter="/signin"
        textLink="Inicia Sesión"
        email={emailRegister}
        emailChange={handleEmailChange}
        password={passwordRegister}
        passwordChange={handlePasswordChange}
        name = {nameRegister}
        nameChange = {handleNameChange}
        sign={handleRegister}
        error = {error}
      />
    </div>
  );
}