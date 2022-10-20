import "./App.css";
import { useState, useEffect } from "react";
import fetchPosts from "./api/helpers";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import NavBar from "./NavBar";
import Login from "./Login";
import Register from "./Register";
import useAuth from "./hooks/useAuth";
import SinglePost from "./SinglePost";
import Messages from "./Messages";
import Profile from "./Profile";
import NewPost from "./NewPost";

function App() {
  const { setToken, user } = useAuth();
  return (
    <div className="App">
      <NavBar user={user} setToken={setToken} />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts/:id" user={user} element={<SinglePost />} />
          <Route path="newpost" element={<NewPost />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="register" element={<Register setToken={setToken} />} />
          <Route path="/posts/:id/messages" element={<Messages />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
