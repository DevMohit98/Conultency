import React from "react";
import doing from "../Asset/doing.png";
import "../App.css";
const About = () => {
  return (
    <>
      <section className="p-4">
        <div className="d-flex justify-content-center align-items-center  flex-column about-text ">
          <h1 className="mt-3">About us</h1>
          <div className="p-4 para">
            <p className="about-para">
              Getting started can be a complex task, so many unknown factors to
              consider as an entrepreneur. The startup consultancy services
              provide assistance to newer ventures. Having expert advice
              available can significantly improve the chances of success. It can
              be a time saver and highly reduce budget requirements. Just by
              avoiding costly mistakes alone. As a business startup, consulting
              services come with invaluable benefits.
            </p>
            <p className=" para1">
              When starting a new business, most entrepreneurs do not have
              expertise across all areas of the business. Even if that would be
              the case, it would not be beneficial. Necessary tasks to start a
              business can be accomplished successfully and more efficiently
              with help.
            </p>
          </div>
        </div>
      </section>
      <section className="p-4">
        <div className="d-flex justify-content-center align-item-center">
          <h1 className="purpose-title">How we are doing this ?</h1>
        </div>
        <div className="row">
          <div className="col col-xl-6">
            <div className="d-flex justify-content-center align-items-center">
              <img src={doing} alt="doing" className="doing-image "></img>
            </div>
          </div>
          <div className="col col-xl-6">
            <div className="d-flex justify-content-center align-item-center mt-4">
              <p className=" purpose-para  mt-4">
                We designed the business models for Women's start-ups in
                Sustainability We create a user-friendly platform informing and
                comparing start-up Green Loan options We provide Agile
                training/coaching to the companies
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
