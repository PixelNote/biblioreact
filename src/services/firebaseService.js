import { storage } from "../firebase/config";
import { db } from "../firebase/config"; 
import { setDoc, getDocs, getDoc, collection, doc, deleteDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

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
    alert('Complete todos los campos.')
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

export async function getBook(email, title){

  const userDocRef = doc(db, "users", email, "books", title);
  const result = await getDoc(userDocRef);
  return result.data()


}

export async function updateBook(
  email,
  currentTitle,
  newTitle,
  file,
  author,
  genre,
  date
) {
  try {
    const currentBookDocRef = doc(db, "users", email, "books", currentTitle);
    const currentBookDocSnapshot = await getDoc(currentBookDocRef);
    const currentBookData = currentBookDocSnapshot.data();

    let imageUrl = ''

    if (currentTitle !== newTitle) {
      const prevStorageRef = ref(storage,`${email}/${currentTitle}`)
      const storageRef = ref(storage, `${email}/${newTitle}`);
      await uploadBytes(storageRef, file);
      await deleteObject(prevStorageRef)
      imageUrl = await getDownloadURL(storageRef);
      }
      else{
        imageUrl = currentBookData.image
      }


    await setDoc(currentBookDocRef, {
      title: newTitle,
      image: imageUrl,
      author,
      genre,
      date,
    });

    if (currentTitle !== newTitle) {
      const previousBookDocRef = doc(db, "users", email, "books", currentTitle);
      await deleteDoc(previousBookDocRef);
    }

    alert("Libro actualizado con éxito");
  } catch (e) {
    console.error("Error al actualizar el libro:", e.message);
    throw e;
  }
}

export async function deleteBook(email, title){

  const BookDocRef = doc(db, "users", email, "books", title);
  const storageRef = ref(storage, `${email}/${title}`);
  await deleteDoc(BookDocRef);
  await deleteObject(storageRef);

}