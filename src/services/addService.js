import { storage } from "../firebase/config";
import { db } from "../firebase/config"; 
import { setDoc, collection, doc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


export async function saveBook(email, file, title, author, genre, date ){

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

}