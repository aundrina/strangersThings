import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "./api/auth";
import useAuth from "./hooks/useAuth";

function Login({ setToken }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const result = await registerUser(username, password);
        navigate("/");
        const token = result.data.token;
        localStorage.setItem("token", token);
        setToken(token);
        console.log(token);
      }}
    >
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="Password"
      />

      <button>Submit</button>
    </form>
  );
}

export default Login;
