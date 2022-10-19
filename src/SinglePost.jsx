import { useEffect, useState } from "react";
import fetchPosts from "./api/helpers";
import Posts from "./Posts";
import { useParams } from "react-router-dom";
import styles from "./style/SinglePost.css";

export default function SinglePost() {
  // use the useParams hook from react-router-dom to read the url :id
  const { id } = useParams();

  const [individualPost, setIndividualPost] = useState({});

  useEffect(() => {
    async function getPost() {
      const posts = await fetchPosts();

      const [onePost] = posts.filter((post) => {
        return post._id === id;
      });
      console.log(onePost);
      setIndividualPost(onePost);
    }
    getPost();
  }, []);

  return (
    <div className="singlePost">
      <h4>{individualPost.title}</h4>
      <h3> {individualPost.description}</h3>
      <h3>{individualPost.price}</h3>
    </div>
  );
}
