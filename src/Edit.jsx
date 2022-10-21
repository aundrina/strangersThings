import { editPost } from "./api/auth";
import useAuth from "./hooks/useAuth";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./style/Edit.css";

export default function Edit() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const { token } = useAuth();
  const navigate = useNavigate();
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const editResult = await editPost(title, description, price, token, id);
        console.log(editResult);
        navigate("/");
      }}
    >
      <input
        className="editIn"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="New title"
      />
      <input
        className="editIn"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder=" New description"
      />
      <input
        className="editIn"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        placeholder="New price"
      />
      <button> Submit</button>
    </form>
  );
}
