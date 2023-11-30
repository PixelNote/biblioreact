import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Library from  "./pages/library";
import AddBook from "./pages/addBook";
import "./App.css";
import Book from "./components/book";
import UpdateBook from "./pages/updateBook";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/library" element={<Library/>}/>
          <Route path="/library/add" element={<AddBook/>}/>
          <Route exact path="/library/books/:title" element={<Book/>}/>
          <Route exact path="/library/books/update/:titleBook" element={<UpdateBook/>}/>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
