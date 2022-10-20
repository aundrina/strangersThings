import { Link } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import styles from "./style/NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBar({ user, setToken }) {
  const navigate = useNavigate();
  return (
    <div className="Nav">
      <h1 className="webTitle">Stranger's Things</h1>
      <h2 className="greeting">Hello {user.username}</h2>

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
          <div className="userViewButtons">
            <Link to="/profile" className="profile">
              Profile
            </Link>

            <Link to="/newpost" className="newpost">
              Create Post
            </Link>
            <button
              className="logout"
              onClick={() => {
                localStorage.removeItem("token");
                setToken("");
                console.log(localStorage.getItem("token"));
                navigate("/");
              }}
            >
              Log Out
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default NavBar;
