import { Link } from "react-router-dom";
import "./Book.css"

export default function Book({ item }) {

  return (
    <div className="bookContainerStyle">
      <Link to={`/view/${item.id}`} className="bookInfoStyle">
        <img src={item.cover} width="200" />
        <div>{item.title}</div>
      </Link>
    </div>
  );
}
