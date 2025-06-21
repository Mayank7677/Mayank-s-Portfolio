import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Playground from "./components/Playground";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-20 sm:pt-30">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Playground />} />
          <Route path="/me" element={<About />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </div>

      <Footer/>
    </BrowserRouter>
  );
};

export default App;
