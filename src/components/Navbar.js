import { Link } from "react-router-dom";
import "./Navbar.css"

export default function NavBar() {
  

  return (
    <div className="navContainerStyle">

      <Link to="/" className="linkStyle">
        Home
      </Link>
      <Link to="/About" className="linkStyle">
        Libros Cargados
      </Link>
      <Link to="/create" className="linkStyle">
        Subir Libro
      </Link>
      <Link to="/create" className="linkStyle">
      <button class="button-85" role="button">Iniciar Sesion</button>
      </Link>
    </div>
  );
}




