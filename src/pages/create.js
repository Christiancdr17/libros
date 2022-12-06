import { useState } from "react";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";
import "./Create.css"

export default function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const store = useAppContext();

  function handleChange(e) {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "author":
        setAuthor(e.target.value);
        break;
      case "intro":
        setIntro(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(e.target.value);
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review,
    };

    store.createItem(newBook);
  }

  function handleOnChangeFile(e) {
    const element = e.target;
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      console.log("RESULT", reader.result);
      setCover(reader.result.toString());
    };
    reader.readAsDataURL(file);
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="formContainer">
        <div className="container">
          <div className="title">Title</div>
          <input
            className="input"
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
          />
        </div>

        <div className="container">
          <div className="title">Author</div>
          <input
            className="input"
            type="text"
            name="author"
            onChange={handleChange}
            value={author}
          />
        </div>

        <div className="container">
          <div className="title">Cover</div>
          <input type="file" name="cover" onChange={handleOnChangeFile} />
          <div>{!!cover ? <img src={cover} width="200" /> : ""}</div>
        </div>

        <div className="container">
          <div className="title">intro</div>
          <input
            className="input"
            type="text"
            name="intro"
            onChange={handleChange}
            value={intro}
          />
        </div>

        <div className="container">
          <div className="title">Completed</div>
          <input
            className="input"
            type="checkbox"
            name="completed"
            onChange={handleChange}
            value={completed}
          />
        </div>

        <div className="container">
          <div className="title">review</div>
          <input
            className="input"
            type="text"
            name="review"
            onChange={handleChange}
            value={review}
          />
        </div>

        <input
          type="submit"
          value="Registrar libro"
          style={{
            padding: "15px 20px",
            minWidth: "200px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#1e9638",
            color: "white",
            fontWeigth: "bolder",
            fontSize: "18px",
          }}
        />
      </form>
    </Layout>
  );
}
