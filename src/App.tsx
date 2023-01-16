import { Routes, Route } from "react-router-dom";
import Article from "./pages/Article";
import ArticlesMain from "./pages/ArticlesMain";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ArticlesMain />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
