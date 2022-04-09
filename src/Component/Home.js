import React from "react";
import logo from "../Asset/logo.png";
import About from "./About";
import "../App.css";
const Home = () => {
  return (
    <>
      <section className="p-4">
        <div className="row">
          <div className="col col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
            <img src={logo} alt="logo" className="logo"></img>
          </div>
          <div className="col col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 pt-4">
            <p className="text-center content-text m-4">
              GLASW is dedicated to offer their expertise to women-led start-ups
              getting the necessary finances via our green loan initiatives
              programme offered by our partnered financial institutions globally
              .
            </p>
          </div>
        </div>
      </section>
      <About />
    </>
  );
};
export default Home;
