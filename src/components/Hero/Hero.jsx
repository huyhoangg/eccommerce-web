import React from "react";
import { Link } from "react-router-dom";
import Mockup from "../../assets/navImg.png";


function Hero() {
  return (
    <section className="mt-[175px] sm:mt-0">
      <div className="mt-[80px] grid  px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 text-black">
        <div className=" place-self-center lg:col-span-7" style={{ maxWidth: '1280px',
    margin: '0 auto'}}>
          <h1 className="max-w-2xl mb-4 text-4xl font-normal tracking-tight leading-none md:text-5xl xl:text-6xl">
            Ở ĐÂY CÓ BÁN
          </h1>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            BÀI TARROT
          </h1>
          <Link to="/store" className=" inline-block relative text-[25px] font-semibold title-font mt-3 text-black " >
                Mua Ngay
                <svg
              className="w-5 h-5 ml-2 -mr-1 inline-block" 
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
                <span span style={{position: 'absolute', content: '',  height: '2px', bottom: '-16px', left: '-7px', right:'-7px', backgroundColor: 'black'}}></span>
              
          
          </Link>
          
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src={Mockup}
            className="w-full"
            alt="mockup"
            style={{ maxWidth: "none" }}
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
