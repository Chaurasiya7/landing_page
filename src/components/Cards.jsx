import React from "react";
import Company_1 from "../assets/company_1.png";

function Cards(props) {
  return (
    <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-100">
    
      <img className="w-20 mx-auto mt-[-3rem]" src={Company_1} alt="" />
      <h2 className="text-2xl font-bold text-center py-6">{props.user}</h2>
      <p className="text-center text-4xl font-bold">{props.price}</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-6">{props.p1}</p>
        <p className="py-2 border-b mx-8">{props.p2}</p>
        <p className="py-2 border-b mx-8">{props.p3}</p>
      </div>
    <button  className="bg-[#7000df] text-black py-2 rounded-lg px-7 font-medium text-lg  my-6 mx-auto">{props.button}</button>
    </div>
  );
}

export default Cards;
