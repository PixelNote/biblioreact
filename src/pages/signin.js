import React, { useState } from 'react';
import '../App.css';
import Sign from '../components/sign/index';
import { useAuth } from '../context/authContext';


export default function SignIn(){

  const auth = useAuth()

  const [ email, setEmail ] = useState("");

  const [ password, setPassword ] = useState('');

  const handleEmailChange = (email) => {
    setEmail(email);
  }

  const handlePasswordChange = (password) =>{
    setPassword(password);
  }

  const handleLogin = () =>{
    auth.login(email, password);
  }

  return (
    <div className="page">
      <Sign
        title="Bienvenido"
        subtitle="Ingresa con tu cuenta"
        button="Iniciar Sesión"
        context="No tienes una cuenta?"
        linkButton="/"
        linkFooter="/signup"
        textLink="Regístrate"
        email={email}
        emailChange={handleEmailChange}
        password={password}
        passwordChange={handlePasswordChange}
        signUp={handleLogin}
      />
    </div>
  );
}