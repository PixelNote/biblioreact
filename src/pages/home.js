import React from 'react';
import { useAuth } from '../context/authContext';
import NavBar from '../components/navbar';
import Landing from '../components/landing';
import '../App.css';

export default function Home() {

  const auth = useAuth();
  const { displayName } = auth.user
  return (
    <>
      <NavBar displayName={displayName} />
      <div className="page home">
        {displayName ? (
          <Landing buttonUrl="/library" buttonText="Ingresar ahora" />
        ) : (
          <Landing buttonUrl="/signup" buttonText="Comienza ahora" />
        )}
      </div>
    </>
  );

}