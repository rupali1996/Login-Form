import logo from "./logo.svg";
import "./App.css";
import Signup from "./LoginSignUp/Signup";
import Login from "./LoginSignUp/Login";
import Home from "./LoginSignUp/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
