import { useState, useEffect } from "react";
import fetchPosts from "./api/helpers";

function Posts() {
  const [posts, SetPosts] = useState([]);
  useEffect(() => {
    async function getAllPosts() {
      const allPosts = await fetchPosts();
      SetPosts(allPosts);
    }
    console.log("we are in the useEffect");
    getAllPosts();
  }, []);
  return (
    <div>
      <h1> Posts</h1>
      {console.log({ posts })}
      {posts.map((post) => {
        return (
          <div className="post" key={post._id}>
            <h4>{post.title} </h4>
            <h4>{post.description} </h4>
            <h4>{post.price} </h4>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
