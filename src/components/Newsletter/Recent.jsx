import React from "react";
import BlogItem from "../BlogItem";
import { useSelector } from "react-redux";

const Recent = () => {
  const { blogs } = useSelector((state) => state.blogs);

  return (
    <div>
      <p className="mb-[30px] text-[24px] font-semibold dark:text-white text-[#1A1A1A]">
        Recent blog posts
      </p>
      <div className="gap-[32px] grid md:grid-cols-2 lg:grid-cols-3">
        {blogs.slice(0, 3).map((item, i) => (
          <BlogItem {...item} key={i} col />
        ))}
      </div>
    </div>
  );
};

export default Recent;
