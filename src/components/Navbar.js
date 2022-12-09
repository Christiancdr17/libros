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
      <Link to="/Contacto" className="linkStyle">
      <button class="button-85" role="button">Quiero Contactarme</button>
      </Link>
    </div>
  );
}




