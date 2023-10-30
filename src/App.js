import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import Menu from "./Components/Menu"
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
    <Menu />
        <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
