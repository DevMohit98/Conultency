import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Consultency from "./Component/Consultency";
import Regsiter from "./Component/Register";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Loans from "./Component/Loans";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Consultency />} />
          <Route path="/register" element={<Regsiter />} />
          <Route path="/loans" element={<Loans />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default App;
