import React, { useState } from "react";
import BlogItem from "../BlogItem";
import LeftArrow from "../icons/LeftArrow";
import { useSelector } from "react-redux";

const All = () => {
  const { blogs } = useSelector((state) => state.blogs);
  const [page, setPage] = useState(1);
  const nums = new Array(Math.ceil(blogs.length / 6))
    .fill("")
    .map((_, i) => i + 1);

  return (
    <div className="container mx-auto px-[32px] lg:px-[112px] py-[30px]">
      <p className="mb-[30px] text-[24px] font-semibold dark:text-white text-[#1A1A1A]">
        All blog posts
      </p>
      <div className="gap-[32px] grid md:grid-cols-2 lg:grid-cols-3">
        {blogs.slice(page * 6 - 6, page * 6).map((item, i) => (
          <BlogItem {...item} key={i} col />
        ))}
      </div>
      <div className="border-t border-t-[#EAECF0] mt-[30px] pt-[30px] flex items-center justify-between">
        <button
          onClick={() => setPage(Math.max(page - 1, 1))}
          className="flex items-center text-[#667085] gap-2 text-sm dark:text-[#EFEFEF]"
        >
          <LeftArrow />
          Previous
        </button>
        <div className="flex gap-[2px] items-center">
          {nums
            // .slice(0, 3)
            .map((number) => (
              <button
                onClick={() => setPage(number)}
                key={number}
                className={`${
                  number == page &&
                  "bg-[#F9F5FF] !text-[#7F56D9] dark:!text-[#112211]"
                } rounded-[8px] size-[40px] text-[#667085] text-sm flex items-center justify-center dark:text-[#EFEFEF]`}
              >
                {number}
              </button>
            ))}
        </div>
        <button
          onClick={() => setPage(Math.min(page + 1, nums.length))}
          className="flex items-center text-[#667085] gap-2 text-sm dark:text-[#EFEFEF]"
        >
          Next
          <LeftArrow flip />
        </button>
      </div>
    </div>
  );
};

export default All;
