import { storage } from "../firebase/config";
import { db } from "../firebase/config"; 
import { setDoc, getDocs, collection, doc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function saveBook(email, file, title, author, genre, date ){

  try{
  const storageRef = ref(storage, `${email}/${title}`)
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  const userDocRef = doc(db, 'users', `${email}`)
  const booksCollection = collection(userDocRef, 'books')
  await setDoc(doc(booksCollection, title), {
    'title': title,
    'image': url,
    "author": author,
    "genre": genre,
    'date': date,
  });
  alert("Libro agregado con exito");
  }catch(e){
    console.log(e.message)
  }
}

export async function getBooks(email){
  try{
    
  const userDocRef = doc(db, "users", `${email}`);
  const booksCollection = collection(userDocRef, "books");
  const querySnapshot = await getDocs(booksCollection)
  const response = []
  querySnapshot.forEach((doc) => {
    response.push(doc.data())
  });
  return response
  }catch(e){
    console.log(e.message)
  }

}