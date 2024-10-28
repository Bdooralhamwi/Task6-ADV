import React from "react";
import BlogItem from "../BlogItem";
import { useSelector } from "react-redux";

const Recent = () => {
  const { blogs } = useSelector((state) => state.blogs);

  return (
    <>
      <p className="mb-[30px] text-[24px] font-semibold dark:text-white text-[#1A1A1A]">
        Recent blog posts
      </p>
      <div className="gap-[32px] grid grid-cols-1">
        {blogs.slice(0, 9).map((item, i) => (
          <BlogItem {...item} key={i} col />
        ))}
      </div>
    </>
  );
};

export default Recent;
