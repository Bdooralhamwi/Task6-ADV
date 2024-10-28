import React from "react";

const Content = ({ date, title, img, content, categories }) => {
  return (
    <div className="w-full mb-[32px]">
      <p className="text-sm text-[#6941C6] font-semibold">{date}</p>
      <p className="my-[32px] text-[36px] text-[#1A1A1A] font-bold leading-[32px] dark:text-white">
        {title}
      </p>
      <div
        className="aspect-[778/426] w-full bg-cover bg-center mb-[32px]"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div
        className="dark:[&_*]:!text-white"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>{" "}
      <div className="flex items-center gap-2 mt-[24px] flex-wrap">
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
  );
};

export default Content;
