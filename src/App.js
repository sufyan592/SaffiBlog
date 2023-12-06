import React from "react";
import Blog from "./BlogComponents/Blog/Blog";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetailed from "./BlogComponents/Blog/BlogDetailed";
import CreateBlog from "./BlogComponents/Blog/CreateBlog";
import Sigin from "./BlogComponents/Blog/Sigin";
import Loginn from "./BlogComponents/Blog/Loginn";
import UpdateBlog from "./BlogComponents/Blog/UpdateBlog";
// import Login from "./BlogComponents/Blog/login";
// import "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog/:id" element={<BlogDetailed />}></Route>
          <Route path="/create" element={<CreateBlog />}></Route>
          <Route path="/signin" element={<Sigin />}></Route>
          <Route path="/login" element={<Loginn />}></Route>
          <Route path="/update/:updateId" element={<UpdateBlog />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
