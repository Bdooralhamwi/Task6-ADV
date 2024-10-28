import React from "react";

const links = [
  {
    text: "© 2023",
  },
  {
    text: "Twitter",
  },
  {
    text: "LinkedIn",
  },
  {
    text: "Email",
  },
  {
    text: "RSS feed",
  },
  {
    text: "Add to Feedly",
  },
];

const Footer = () => {
  return (
    <div className="container mx-auto px-[32px] lg:px-[112px] py-[30px] flex flex-col md:flex-row items-center gap-[14px]">
      {links.map(({ text }, i) => (
        <a href="" className="text-xl text-[#1A1A1A] dark:text-white" key={i}>
          {text}
          
        </a>
      ))}
    </div>
  );
};

export default Footer;
