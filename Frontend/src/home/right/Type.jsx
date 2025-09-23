import React from "react";
import { IoMdSend } from "react-icons/io";

export default function Type() {
  return (
    <>
      <div className=" flex space-x-3 h-[10vh] text-center bg-gray-800">
        <div className="w-[70%] mx-4">
          <input
            className="border-[1px] border-gray-700 flex items-center w-full py-3 px-3 rounded-xl grow outline-none bg-slate-900 mt-1"
            type="text"
            placeholder="Type here"
          />
        </div>
        <button className="text-3xl">
          <IoMdSend />
        </button>
      </div>
    </>
  );
}
