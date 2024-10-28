import React from "react";

const LeftArrow = ({ flip }) => {
  return (
    <svg
      className={flip && "rotate-180"}
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8334 10.4998H4.16675M4.16675 10.4998L10.0001 16.3332M4.16675 10.4998L10.0001 4.6665"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-[#667085] dark:stroke-[#EFEFEF]"
      />
    </svg>
  );
};

export default LeftArrow;
