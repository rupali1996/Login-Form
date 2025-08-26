import React from "react";
import Navbar from "./Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <div>
        <form className="login-form">
          <div className="heading">
            <p>Log In</p>
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
              Create account ? <a href="">Sign up</a>
            </p>
            <button>Log In</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
