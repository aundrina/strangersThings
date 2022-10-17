import "./App.css";
import { useState, useEffect } from "react";
import fetchPosts from "./api/helpers";

function App() {
  return <div className="App">Stranger's Things</div>;
  const [posts, SetPosts] = useState({});
  useEffect(() => {
    async function getAllPosts() {
      const allPosts = await fetchPosts();
      setPosts(allPosts);
    }
    console.log("we are in the useEffect");
    getAllPosts();
  }, []);
  return (
    <div>
      <h1> Posts</h1>
      {posts.map((post) => {
        return (
          <div className="post" key={post.id}>
            <h4>{post.title} </h4>
            <h4>{post.description} </h4>
            <h4>{post.price} </h4>
          </div>
        );
      })}
    </div>
  );
}

export default App;
