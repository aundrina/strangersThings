import { useState } from "react";
import { createPost } from "./api/helpers";
import { useNavigate } from "react-router-dom";

function NewPost() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  return (
    <form
      className="form"
      onSubmit={async (e) => {
        e.preventDefault();
        const result = await createPost(title, description, price);
        navigate("/");
      }}
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Description"
      />

      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        placeholder="Price"
      />

      <button>Submit</button>
    </form>
  );
}

export default NewPost;
