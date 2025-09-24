import React from "react";  
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import NewsPage from "./pages/NewsPage";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<CategoryPage />} />
        <Route path="/news/:id" element={<NewsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
