import React from "react";
import Hero from "../components/Home/Hero";
import Recent from "../components/Home/Recent";
// import HorizontalBlog from "../components/Home/HorizontalBlog";
import All from "../components/Home/All";

const Home = () => {
  return (
    <div>
      <Hero />
      <Recent />
      {/* <HorizontalBlog /> */}
      <All />
    </div>
  );
};

export default Home;
