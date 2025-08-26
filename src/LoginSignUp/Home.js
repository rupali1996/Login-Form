import React from "react";
import Navbar from "./Navbar";
import HImg from "../images/homepage.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="HomeImg">
        <div>
          <h1>Welcome to Home Page ..!!</h1>
          {/* <img src={HImg} /> */}
        </div>
        <button>Logout</button>
      </div>
    </>
  );
};

export default Home;
