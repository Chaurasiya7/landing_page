import React from "react";
import Company_1 from "../assets/company_1.png";

function Company() {
  return (
    // py-16 px-4
    <div className="bg-white w-full py-12 px-6">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img src={Company_1} alt="/" className="mx-auto my-4 md:h-[450px]" />
        <div className="flex flex-col justify-center  ">
          <p className="uppercase  text-[#7000df] font-bold md:text-[28px] text-lg mx-auto py-2 md:mx-0">
            Data Analysis Dashboard
          </p>
          <h1 className="text-xl sm:text-xl md:text-4xl font-bold mx-auto md:mx-0 ">Manage Data Analytics Centrally</h1>
          <p className="text-justify py-2 md:text-lg text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            optio quis ducimus rerum deleniti mollitia similique, porro culpa
            nesciunt nostrum reprehenderit veritatis inventore alias repellat
            voluptate dolorem voluptates doloribus consequuntur.
          </p>
          <button className="bg-[#7000df] py-2 rounded-lg px-7 tracking-wide font-medium text-lg  text-black w-[160px]  my-4 mx-auto md:mx-0" >Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Company;
