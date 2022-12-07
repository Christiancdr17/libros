import NavBar from "./Navbar";
import "./Layout.css"

export default function Layout({ children }) {
  
  return (
    <div>
      <NavBar />
      <div className="containerStyle">{children}</div>
    </div>
  );
}
