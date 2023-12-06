import React from "react";
import Hero from "../Components/Hero/Hero";
import Nav from "../Components/Hero/Nav/Nav";
import Blog from "../BlogComponents/Blog/Blog";
import LocalStore from "../Components/LocalStore";
import MultiForm from "../Components/MultiForm";

const Home = () => {
  return (
    <>
      <Nav />
      <Blog />
      {/* <Hero /> */}
      {/* <MultiForm /> */}
    </>
  );
};

export default Home;
