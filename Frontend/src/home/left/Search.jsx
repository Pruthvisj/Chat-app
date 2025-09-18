import React from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function Search() {
  return (
    <>
      <div>
        <form action="">
          <div className="flex space-x-3">
            <label className="input">
              <input type="search" className="grow" placeholder="Search" />
            </label>
            <button>
              {" "}
              <IoSearchSharp />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
