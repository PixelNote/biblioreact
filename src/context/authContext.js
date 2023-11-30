import React, {useState, useEffect} from 'react';
import { auth } from '../firebase/config';
import { createContext, useContext } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';

export const authContext = createContext()

export const useAuth = () => {

  return useContext(authContext);
}

export function AuthProvider({children}){

  const [user, setUser] = useState('');

  useEffect(()=>{
    const loggedIn = onAuthStateChanged(auth, (current)=>{
      if(!current){
        setUser('')
      }else{
        setUser(current)
      }
    }) 
    return ()=> loggedIn()
  }, [])

  const register = async(email, userName, password) =>{
    try{
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    
    await updateProfile(auth.currentUser, { displayName: userName });
    return response
    }catch(e){
      return e.message
    }
  };

  const login = async(email, password) => {
    try{
     return await signInWithEmailAndPassword(auth, email, password);

    }catch(e){
      return e.message;
    }
    

  }

  const logout = async () =>{
    await signOut(auth)

  }

  return <authContext.Provider
    value={{
      register,
      login,
      logout,
      user
    }}
    >{children}</authContext.Provider>

}
