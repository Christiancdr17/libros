import Index from "./pages/Index";
import Create from "./pages/Create";
import View from "./pages/View";
import About from "./pages/About"
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Store from "./store/Store";

function App() {
  return (
    <Store>
      <div className="App">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="about" element={<Index />} />
          <Route path="create" element={<Create />} />
          <Route path="view/:bookId" element={<View />} />
        </Routes>
      </div>
    </Store>
  );
}

export default App;
