import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar /> 
          <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/business" element={<News country="us" pageSize={5} category="business" />} />
            <Route path="/entertainment" element={<News country="us" pageSize={5} category="entertainment" />} />
            <Route path="/general" element={<News country="us" pageSize={5} category="general" />} />
            <Route path="/health" element={<News country="us" pageSize={5} category="health" />} />
            <Route path="/science" element={<News country="us" pageSize={5} category="science" />} />
            <Route path="/sports" element={<News country="in" pageSize={5} category="sports" />} />
            <Route path="/technology" element={<News country="us" pageSize={5} category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
