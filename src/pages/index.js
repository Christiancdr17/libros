import { Link } from "react-router-dom";
import Book from "../components/book";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

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
