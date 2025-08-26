import React, { useState } from "react";
import Img from "../images/bg.png";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const UserDetail = {
    name: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(UserDetail);

  const navigate = useNavigate();
  const handleInput = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    const name = event.target.name;
    const value = event.target.value;

    setData({ ...data, [name]: value });
  };
  console.log(data);

  const handleSubmit = (event) => {
    if (data.name == "" || data.email == "" || data.password == "") {
      alert("Please Enter Details.!!");
    } else {
      event.preventDefault();
      const getData = JSON.parse(localStorage.getItem("user") || "[]");
      let arr = [];
      arr = [...getData];
      arr.push(data);
      localStorage.setItem("user", JSON.stringify(arr));
      alert("Signup Successfully..!!");
      navigate("/login");
    }
  };

  return (
    <>
      <Navbar />
      <div className="main-page">
        <div>
          <img src={Img} alt="image" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="heading">
            <p>Sign Up</p>
          </div>
          <div className="account">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={handleInput}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your mail"
              onChange={handleInput}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleInput}
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
