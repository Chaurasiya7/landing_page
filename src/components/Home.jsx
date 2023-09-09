import React from "react";
import Typed from "react-typed";

function Home() {
  return (
    <div className="text-white">
      {/* max-w-[800px] w-full */}
      <div className="  mt-[-60px] flex flex-col justify-center items-center text-center h-screen">
        <p className="text-[#7000df] font-bold md:text-xl ">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-4xl font-bold md:text-7xl py-2 md:py-3 sm:text-6xl">
          Grow with Data
        </h1>
        <div className="flex justify-center">
          <p className="text-xl font-bold  sm:mt-2 md:text-5xl sm:text-4xl ">
            Fast, Flexible financing for
          </p>
          <Typed
            className="text-xl font-bold  sm:mt-2 md:text-5xl sm:text-4xl pl-2 text-gray-400"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={100}
            backSpeed={120}
            loop
          />
        </div>
        <p className=" md:text-2xl text-[14px] sm:text-[18px] font-bold text-gray-600 max-w-[750px] sm:py-2">
          Monitor your data analytics to increase revenue for BTB, BTC & SAAS
          platforms.
        </p>
        <button className="bg-[#7000df] py-2 rounded-lg px-7 tracking-wide font-bold text-lg md:mt-2 my-4" >Get Started</button>
      </div>
    </div>
  );
}

export default Home;
