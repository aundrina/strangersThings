import "./App.css";
import { useState, useEffect } from "react";
import fetchPosts from "./api/helpers";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import NavBar from "./NavBar";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
