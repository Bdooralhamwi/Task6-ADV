import React from "react";
import AngledArrow from "./icons/AngledArrow";

const BlogItem = ({
  col,
  img,
  date,
  title,
  brife,
  categories,
  id,
  className,
}) => {
  return (
    <div
      className={`flex ${
        col && "row-span-2 flex-col md:flex-col gap-[32px]"
      } gap-[24px] w-full flex-col md:flex-row ${className}`}
    >
      <div
        className={`${
          col && "md:!h-[228px]"
        } !h-[228px] md:h-[unset] w-full bg-cover bg-center`}
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div className="w-full">
        <p className="text-sm text-[#6941C6]">{date}</p>
        <a
          href={`/blog/${id}`}
          className={`font-semibold flex items-center justify-between my-[12px] ${
            col && "!text-2xl"
          } text-xl text-[#1A1A1A] dark:text-white`}
        >
          {title}
          <AngledArrow />
        </a>
        <p className="text-[#667085] mb-[24px] dark:text-[#C0C5D0]">{brife}</p>
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map(({ text, bgColor, color }, i) => (
            <p
              key={i}
              style={{
                backgroundColor: bgColor,
                color: color,
              }}
              className="rounded-full py-0.5 px-[10px] text-sm"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
