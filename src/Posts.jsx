import { useState, useEffect } from "react";
import fetchPosts from "./api/helpers";
import SinglePost from "./SinglePost";
import "./style/posts.css";
import { Navigate, useNavigate } from "react-router-dom";

function Posts() {
  const navigate = useNavigate();
  const [posts, SetPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    async function getAllPosts() {
      const allPosts = await fetchPosts();
      SetPosts(allPosts);
    }
    getAllPosts();
  }, []);

  const postMatches = (post, text) => {
    // return true if any of the fields you want to check against include the text
    // strings have an .includes() method
    return post.title.toLowerCase().includes(text.toLowerCase());
  };

  const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;
  return (
    <div className="posts">
      <form>
        <input
          className="searchIn"
          type="text"
          placeholder="search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <h1> Posts</h1>
      <div className="container">
        {postsToDisplay.map((post) => {
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
