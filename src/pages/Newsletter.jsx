import React from "react";
import Newsletter from "../components/Newsletter";
import Recent from "../components/Newsletter/Recent";

const NewsletterPage = () => {
  return (
    <div className="container mx-auto px-[32px] lg:px-[112px] flex flex-col gap-[60px]">
      <Newsletter />
      <Recent />
    </div>
  );
};

export default NewsletterPage;
