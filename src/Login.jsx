import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { loginUser } from "./api/auth";
import useAuth from "./hooks/useAuth";

function Login({ setToken }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const result = await loginUser(username, password);
        console.log(result);
        if (result.success) {
          const token = result.data.token;
          localStorage.setItem("token", token);
          setToken(token);
          console.log("the token is:", token);
          setPassword("");
          setUsername("");

          navigate("/");
        } else {
          console.log("we are in the else");
          setError(result.error.message);
        }
      }}
    >
      {error && <h4>{error}</h4>}
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
