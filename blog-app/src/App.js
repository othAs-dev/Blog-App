import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/Home";
import AddArticles from "./Containers/AddArticles/AddArticles";
import Contact from "./Containers/Contact/Contact";
import Article from "./Containers/Article/Article";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecrire" element={<AddArticles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles/:slug" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
