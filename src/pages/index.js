import { Link } from "react-router-dom";
import Book from "../components/Book";
import Layout from "../components/Layout";
import { useAppContext } from "../store/Store";

export default function Index() {
  const store = useAppContext();

  return (
    <Layout>
      <div libroConteiner>
        {store.items.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
}
