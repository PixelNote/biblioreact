import React, { useState } from 'react';
import { useAuth } from "../context/authContext";
import Sign from '../components/sign/index';
import "../App.css";


export default function SignUp(){

  const auth = useAuth()

  const [ emailRegister, setEmailRegister ] = useState("");

  const [ passwordRegister, setPasswordRegister ] = useState('');

  const handleEmailChange = (email) => {
    setEmailRegister(email);
  }

  const handlePasswordChange = (password) =>{
    setPasswordRegister(password);
  }

  const handleRegister = () =>{
    auth.register(emailRegister, passwordRegister);

  }

  return(
    <div className='page'>
      <Sign 
        title="Regístrate"
        subtitle="Crea una nueva cuenta"
        button='Registrarse'
        context="Ya tienes una cuenta?"
        linkButton="/signin"
        linkFooter="/signin"
        textLink="Inicia Sesión"
        email={emailRegister}
        emailChange={handleEmailChange}
        password={passwordRegister}
        passwordChange={handlePasswordChange}
        sign={handleRegister}
      />
    </div>
  );
}