import React, { useState } from "react";
import Sun from "./icons/Sun";
import Moon from "./icons/Moon";
import Menu from "./icons/Menu";
import Close from "./icons/Close";

const links = [
  {
    text: "Blog",
    href: "/blog/1",
  },
  {
    text: "Projects",
  },
  {
    text: "About",
  },
  {
    text: "Newsletter",
    href: "/newsletter",
  },
];

const Header = ({ dark, setDark }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex items-center container mx-auto px-[32px] lg:px-[112px] justify-between h-[72px] sm:h-[80px] lg:h-[125px]">
        <a
          href="/"
          className="font-semibold text-xl text-primary dark:text-white"
        >
          Your Name
        </a>
        <div className="hidden sm:flex items-center gap-[14px]">
          {links.map(({ text, href }, i) => (
            <a
              href={href}
              key={i}
              className="text-xl text-primary dark:text-white"
            >
              {text}
            </a>
          ))}
          <button
            onClick={() => {
              setDark(!dark);
            }}
            className="w-[96px] h-[40px] rounded-full bg-primary dark:bg-white flex items-center px-[16px] py-[8px]"
          >
            <Sun />
            <span className="ml-[16px] dark:ml-0 mr-0 dark:mr-[16px] size-[24px] bg-white dark:bg-primary rounded-full"></span>
            <Moon />
          </button>
        </div>
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="flex sm:hidden items-center justify-center"
        >
          <Menu />
        </button>
      </div>
      <div
        className="transition bg-white inset-0 fixed sm:-translate-y-[100%] flex flex-col items-center justify-center dark:bg-[#090D1F]"
        style={{
          transform: open ? "" : "translateY(-100%)",
        }}
      >
        <a
          href="/"
          className="font-semibold text-xl text-primary dark:text-white mb-[54px]"
        >
          Your Name
        </a>
        <div className="flex flex-col items-center gap-[36px]">
          {links.map(({ text, href }, i) => (
            <a
              href={href}
              key={i}
              className="text-xl text-primary dark:text-white"
            >
              {text}
            </a>
          ))}
          <button
            onClick={() => {
              setDark(!dark);
            }}
            className="w-[96px] h-[40px] rounded-full bg-primary dark:bg-white flex items-center px-[16px] py-[8px]"
          >
            <Sun />
            <span className="ml-[16px] dark:ml-0 mr-0 dark:mr-[16px] size-[24px] bg-white dark:bg-primary rounded-full"></span>
            <Moon />
          </button>
        </div>
        <button
          onClick={() => {
            setOpen(false);
          }}
          className="flex items-center justify-center absolute bottom-[20px] left-[50%] -translate-x-[50%]"
        >
          <Close />
        </button>
      </div>
    </>
  );
};

export default Header;
