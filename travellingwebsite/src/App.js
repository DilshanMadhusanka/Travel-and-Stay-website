import React from "react";
import "./app.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Popular from "./components/Popular/Popular";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Offers from "./components/Offers/Offers";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Blog />
      <Footer />
      <Home />
      <Offers />
      <Popular />
    </div>
  );
};

export default App;
