import React from "react";
import BlogItem from "../BlogItem";
import { useSelector } from "react-redux";

const Recent = () => {
  const { blogs } = useSelector((state) => state.blogs);

  return (
    <div className="container mx-auto px-[32px] lg:px-[112px] py-[30px]">
      <p className="mb-[30px] text-[24px] font-semibold dark:text-white text-[#1A1A1A]">
        Recent blog posts
      </p>
      <div className="gap-[32px] grid lg:grid-cols-2">
        {blogs.slice(0, 4).map((item, i) => (
          <BlogItem
            {...item}
            key={i}
            col={i == 0}
            className={i == 3 ? "lg:col-span-2 !flex-col lg:!flex-row" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Recent;
