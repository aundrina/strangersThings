import { Link } from "react-router-dom";
import useAuth from "./hooks/useAuth";

function NavBar({ user, setToken }) {
  return (
    <div className="Nav">
      <h1>Hello {user.username}</h1>
      <Link to="/" className="home">
        Home
      </Link>

      {user.username === "Guest" ? (
        <>
          <Link to="/login" className="login">
            Login
          </Link>

          <Link to="/register" className="register">
            Register
          </Link>
        </>
      ) : null}

      {user.username !== "Guest" ? (
        <button
          onClick={() => {
            localStorage.removeItem("token");
            setToken("");
            console.log(localStorage.getItem("token"));
          }}
        >
          Log Out
        </button>
      ) : null}
    </div>
  );
}

export default NavBar;
