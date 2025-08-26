import logo from "./logo.svg";
import "./App.css";
import Signup from "./LoginSignUp/Signup";
import Navbar from "./LoginSignUp/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Signup />
      </div>
    </>
  );
}

export default App;
