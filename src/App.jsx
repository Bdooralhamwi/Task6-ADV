import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Newsletter from "./pages/Newsletter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div
        className="dark:bg-[#090D1F]"
        style={{
          fontFamily: "Inter",
        }}
      >
        <Header setDark={setDark} dark={dark} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/newsletter" element={<Newsletter />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
};

export default App;
