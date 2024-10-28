import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full">
      <p className="text-center text-[#7F56D9] mb-[12px] font-semibold">
        Newlatters
      </p>
      <p className="text-center text-[#1A1A1A] text-[48px] font-semibold dark:text-white">
        Stories and interviews
      </p>
      <p className="text-center text-[#667085] text-[20px] mb-[40px] mt-[24px] dark:text-[#C0C5D0]">
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>
      <div className="flex flex-col gap-[8px] justify-center max-w-[500px] mx-auto">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-start w-full gap-[16px] flex-col md:flex-row"
        >
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full border rounded-[8px] border-[#D0D5DD] placeholder:text-[#667085] px-[16px] py-[12px]"
            style={{
              boxShadow: "0px 1px 2px 0px #1018280D",
            }}
          />
          <button className="bg-[#7F56D9] text-white px-[20px] py-[12px] rounded-[8px]">
            Subscribe
          </button>
        </form>
        <p className="text-[#667085] text-sm dark:text-[#C0C5D0]">
          We care about your data in our{" "}
          <a href="" className="text-[#667085] underline dark:text-[#C0C5D0]">
            privacy policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
