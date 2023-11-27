import React, {useState, useEffect} from 'react';
import { auth } from '../firebase/config';
import { createContext, useContext } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export const authContext = createContext()

export const useAuth = () => {

  const context = useContext(authContext)
  if(!context){
    console.log("erorr creating auth context")
  }
  return context;
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

  const register = async(email, password) =>{
    const response = await createUserWithEmailAndPassword(auth, email, password);
    console.log(response)
  };

  const login = async(email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response)
  }

  const logout = async () =>{
    const response = await signOut(auth)
    console.log(response)

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
