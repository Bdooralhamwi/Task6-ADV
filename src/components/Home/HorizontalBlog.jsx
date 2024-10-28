import React from "react";
import BlogItem from "../BlogItem";

const HorizontalBlog = () => {
  return (
    <div className="container mx-auto px-[32px] lg:px-[112px] py-[30px]">
      <BlogItem
        id={1}
        brife="A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate."
        categories={[
          {
            text: "Design",
            color: "#3538CD",
            bgColor: "#EEF4FF",
          },
          {
            text: "Research",
            color: "#6941C6",
            bgColor: "#F9F5FF",
          },
        ]}
        date="Sunday , 1 Jan 2023"
        title="Grid system for better Design User Interface"
        img="/blog1.png"
      />
    </div>
  );
};

export default HorizontalBlog;
