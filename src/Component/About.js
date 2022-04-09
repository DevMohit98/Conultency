import React from "react";
import banner from "../Asset/banner.jpg";
import "../App.css";
const About = () => {
  return (
    <>
      <section className="p-4">
        <div className="row">
          <div className="col col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <img src={banner} alt={banner} className="banner"></img>
          </div>
          <div className="col col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <h1 className="text-center about-text">About our company</h1>
            <div className="mt-4">
              <p className="text-center content-text">
                About The Startup Consultancy, a professional consulting
                services company offering business and other types of consulting
                services. Our goal is to help our clients be successful in
                business, supporting them through our various consulting
                services. To help them plan, execute, and manage startups,
                projects, and growth more efficiently.
              </p>
            </div>
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-center align-item-center flex-column">
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <i className="fa-regular fa-star fa-3x"></i>
                    <h1 className="pb-4 icon-text">vision</h1>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex justify-content-center align-item-center flex-column">
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <i className="fa-solid fa-medal fa-3x"></i>
                    <h1 className="pb-4 icon-text">Missions</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
