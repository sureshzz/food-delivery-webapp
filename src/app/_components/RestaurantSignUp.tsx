import React from "react";
import { Button } from "@/components/ui/button";
import { IoIosRestaurant } from "react-icons/io";

const restaurantLogin: React.FC = () => {
  const inputCss = "border-2 rounded-md bg-slate-100 hover:bg-slate-200";
  return (
    <div className="w-[50%] border-2 rounded-md bg-slate-100 flex flex-col justify-start items-center">
      <h1 className="text-3xl p-4">
        Login as Restaurant
        <IoIosRestaurant className="inline ml-1 hover:animate-spin " />
      </h1>
      <div className="flex flex-col text-base gap-1">
        <label htmlFor="">Enter Name:</label>
        <input type="text" placeholder="" className={inputCss} />
        <label htmlFor="">Enter your email:</label>
        <input type="text" placeholder="" className={inputCss} />
        <label htmlFor="">Password:</label>
        <input type="password" placeholder="" className={inputCss} />
        <label htmlFor="">Confirm Password:</label>
        <input type="password" placeholder="" className={inputCss} />
        <label htmlFor="">Address:</label>
        <input type="text" placeholder="" className={inputCss} />
        <label htmlFor="">Contact num:</label>
        <input type="text" placeholder="" className={inputCss} />

        <button className="bg-blue-700 text-white p-1 rounded-md my-2 hover:bg-blue-500">
          Sign Up
        </button>
      </div>
    </div>
    // </div>
  );
};

export default restaurantLogin;