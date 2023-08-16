import React from "react";
import Card from "../../assets/card.png"
function NewArrivalBanner() {
  return (
    <div>
      <section className="text-gray-400 bg-primary body-font">
        <div className="container mx-auto flex px-5  md:flex-row flex-col items-center justify-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img
               className="object-cover object-center rounded h-[650px]"
              alt="hero"
              src={Card}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col   items-center text-center mb-5">
            <p className="leading-relaxed text-center text-[24px] text-black font-semibold">
            Mới cập bến 
            </p>
            <h1 className="title-font  mb-4 font-bold text-black text-[48px]">
            Pocket Animal Spirit Deck
            </h1>
            <div className="">
              <button className="ml-4 px-[48px] py-[12px] border border-black focus:outline-none hover:bg-gray-700 hover:text-white rounded text-black text-[20px]">
                Đặt hàng ngay
              </button>
              
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default NewArrivalBanner;
