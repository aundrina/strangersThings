import { useEffect, useState } from "react";
import fetchPosts from "./api/helpers";
import Posts from "./Posts";
import { useParams } from "react-router-dom";
import styles from "./style/SinglePost.css";
import { deletePost, editPost } from "./api/auth";
import useAuth from "./hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function SinglePost() {
  // use the useParams hook from react-router-dom to read the url :id
  const { id } = useParams();
  const { token, user } = useAuth();
  const [individualPost, setIndividualPost] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    async function getPost() {
      const posts = await fetchPosts();

      const [onePost] = posts.filter((post) => {
        return post._id === id;
      });
      setIndividualPost(onePost);
    }
    getPost();
  }, []);

  console.log("tryna do delete", user, individualPost);
  return (
    <div className="singlePost">
      <h4>{individualPost.title}</h4>
      <h3> {individualPost.description}</h3>
      <h3>{individualPost.price}</h3>
      {user?.username == individualPost.author?.username && (
        <button
          onClick={() => {
            navigate(`/`);
            deletePost(individualPost._id, token);
          }}
        >
          Delete Post{" "}
        </button>
      )}
      {user?.username == individualPost.author?.username && (
        <button
          onClick={() => {
            navigate(`/posts/${individualPost._id}/edit`);
          }}
        >
          Edit Post{" "}
        </button>
      )}

      <button
        onClick={() => {
          navigate(`/posts/${individualPost._id}/messages`);
        }}
      >
        Send Message
      </button>
    </div>
  );
}
