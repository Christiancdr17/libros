import { Link } from "react-router-dom";
import Book from "../components/Book";
import Layout from "../components/Layout";
import { useAppContext } from "../store/Store";
import "./Index.css"

export default function Index() {
  const store = useAppContext();

  

  return (
    <Layout>
      <div className="bookContainer">
        {store.items.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
}
