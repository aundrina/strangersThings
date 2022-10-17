import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="Nav">
      <Link to="/" className="home">
        Home
      </Link>
      <Link to="/posts" className="posts">
        Posts
      </Link>
      <Link to="/login" className="login">
        Login
      </Link>
    </nav>
  );
}

export default NavBar;
