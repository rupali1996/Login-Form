import React from "react";
import Img from "../images/bg.png";
import Navbar from "./Navbar";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="main-page">
        <div>
          <img src={Img} alt="image" />
        </div>
        <form>
          <div className="heading">
            <p>Sign Up</p>
          </div>
          <div className="account">
            <input type="text" name="name" placeholder="Enter your name" />
            <input type="text" name="email" placeholder="Enter your mail" />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <p>
              Already have an account ? <a href="/login">Log in</a>
            </p>
            <button>SignUp</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
