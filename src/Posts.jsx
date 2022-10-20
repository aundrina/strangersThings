import { useState, useEffect } from "react";
import fetchPosts from "./api/helpers";
import SinglePost from "./SinglePost";
import styles from "./style/posts.css";
import { Navigate, useNavigate } from "react-router-dom";

function Posts() {
  const navigate = useNavigate();
  const [posts, SetPosts] = useState([]);

  useEffect(() => {
    async function getAllPosts() {
      const allPosts = await fetchPosts();
      SetPosts(allPosts);
    }
    getAllPosts();
  }, []);

  return (
    <div className="posts">
      <h1> Posts</h1>
      <div className="container">
        {posts.map((post) => {
          return (
            <div className="post" key={post._id}>
              <h4>{post.title} </h4>
              <h4>{post.description} </h4>
              <h4>{post.price} </h4>
              <button
                onClick={() => {
                  // We need to navigate to a route which renders the SinglePost Component
                  console.log("post id is", post._id);
                  navigate(`/posts/${post._id}`);
                }}
              >
                See Details{" "}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
