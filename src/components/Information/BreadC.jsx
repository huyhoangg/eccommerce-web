import React from "react";
import { Link, useParams } from "react-router-dom";

function BreadC (props){
    return (
    <nav aria-label="breadcrumb" className="w-[100%] mt-[80px] bg-gray-300">
    <ol className="flex w-full flex-wrap items-center rounded-md bg-blue-gray-50 bg-opacity-60 py-2 px-4">
      <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-light-blue-500">
        <a className="opacity-60 mb-[2px]" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
          </svg>
        </a>
        <Link to="/" >
          <span className="ml-[7px] block">Home</span>
        </Link>
        <span className="pointer-events-none mx-2 select-none font-sans text-sm font-normal leading-normal text-blue-gray-500 antialiased">
          /
        </span>
      </li>
      <li className="flex cursor-pointer items-center font-sans text-sm font-normal leading-normal text-blue-gray-900 antialiased transition-colors duration-300 hover:text-pink-500">
        <a
          className="font-medium text-blue-gray-900 transition-colors "
          href="#"
        >
          {props.page}
        </a>
      </li>
    </ol>
  </nav>
    )
}

export default BreadC;
