import React from "react";

export const BreadCrumb = ({title}) => {
  
  return (
    <div>
      <nav
        aria-label="breadcrumb"
        className="w-full p-4"
      >
        <ol className="flex h-8 space-x-2 text-xl text-white">
          <li className="flex items-center space-x-2 font-bold">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-1 capitalize hover:underline"
            >
              Trang chủ
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              fill="currentColor"
              className="w-2 h-2 mt-1 transform rotate-90 fill-current text-white"
            >
              <path d="M32 30.031h-32l16-28.061z"></path>
            </svg>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-1 capitalize hover:underline hover:no-underline cursor-default"
            >
              {title}
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
};
