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

  const handleLogin = async () =>{

    const response = await auth.login(email, password);

    if(response==='Firebase: Error (auth/invalid-login-credentials).')
    {
      alert('Correo o contraseña incorrectos.')
    }else if (
      response ===
      "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests)."
    ) {
      alert('Su cuenta ha sido desactivada temporalmente debido a multiples ingresos de sesión fallidos.')
    }else{
      navigate("/library");
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