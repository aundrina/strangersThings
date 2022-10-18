import { Link } from "react-router-dom";
import useAuth from "./hooks/useAuth";

function NavBar() {
  const { user, setToken } = useAuth();
  return (
    <div className="Nav">
      <Link to="/" className="home">
        Home
      </Link>

      <Link to="/posts" className="posts">
        Posts
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
