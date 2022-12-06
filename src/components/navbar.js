import { Link } from "react-router-dom";
import "./Navbar.css"

export default function NavBar() {
    return (
    <div className="navContainerStyle">
      <Link to="/" className="linkStyle">
        Home
      </Link>

      <Link to="/create" className="linkStyle">
        Cargar
      </Link>
    </div>
  );
}
