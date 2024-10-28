import React, { useEffect, useMemo, useState } from "react";
import Recent from "../components/Blog/Recent";
import Content from "../components/Blog/Content";
import Newsletter from "../components/Newsletter";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { blogs } = useSelector((state) => state.blogs);
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (blogs) setBlog(blogs.find((blog) => blog.id == id));
    else setBlog(null);
  }, [blogs]);

  return (
    <div className="flex-col-reverse md:flex-row flex container mx-auto px-[32px] lg:px-[144px] gap-[32px] py-[30px]">
      <div className="w-full md:max-w-[342px]">
        <Recent />
      </div>
      <div className="w-full">
        {blog && (
          <Content
            categories={blog.categories}
            content={blog.content}
            date={blog.date}
            img={blog.img}
            title={blog.title}
          />
        )}
        <Newsletter />
      </div>
    </div>
  );
};

export default Blog;
