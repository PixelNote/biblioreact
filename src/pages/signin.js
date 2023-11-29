import React, { useEffect, useState } from 'react';
import '../App.css';
import Sign from '../components/sign/index';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';


export default function SignIn(){

  const auth = useAuth()
  const navigate = useNavigate()

  const [ email, setEmail ] = useState("");

  const [ password, setPassword ] = useState('');

  useEffect(()=>{
    if(auth.user){
      navigate('/library')
    }
  },[auth.user])

  const handleEmailChange = (email) => {
    setEmail(email);
  }

  const handlePasswordChange = (password) =>{
    setPassword(password);
  }

  const handleLogin = () =>{

    if(email && password){
      auth.login(email, password);
      navigate("/");
    }
  }

  return (
    <div className="page">
      <Sign
        title="Bienvenido"
        subtitle="Ingresa con tu cuenta"
        button="Iniciar Sesión"
        context="No tienes una cuenta?"
        linkFooter="/signup"
        textLink="Regístrate"
        email={email}
        emailChange={handleEmailChange}
        password={password}
        passwordChange={handlePasswordChange}
        sign={handleLogin}
      />
    </div>
  );
}