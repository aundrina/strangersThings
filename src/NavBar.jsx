import { Link } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import styles from "./style/NavBar.css";

function NavBar({ user, setToken }) {
  return (
    <div className="Nav">
      <h1 className="greeting">Hello {user.username}</h1>

      <div className="links">
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
    </div>
  );
}

export default NavBar;
