import { Link } from "react-router-dom";
import "./Book.css"
export default function Book({ item }) {

  return (
    <div className="bookContainer">
      <Link to={`/view/${item.id}`} className="bookInfo">
        <img src={item.cover} width="200" />
        <div>{item.title}</div>
      </Link>
    </div>
  );
}
