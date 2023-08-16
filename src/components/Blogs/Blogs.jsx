import React from "react";

import Blog1 from "../../assets/blog1.svg"
import Blog2 from "../../assets/blog2.svg"
import Blog3 from "../../assets/blog3.svg"
import {AiOutlineCalendar} from 'react-icons/ai'



function Blogs() {
  return (
    <div>
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container mx-auto">
          <div className="">
            <div className="">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                Blogs
                </h2>
                
              </div>
            </div>
          </div>
          <div className="mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mx-auto mb-10 max-w-[370px]">
                <div className="mb-8 overflow-hidden rounded">
                  <img
                    src={Blog1}
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div>
                  <div className="text-center ">
                    <p
                      href=""
                      className="cursor-text text-dark  mb-1 inline-block text-xl  sm:text-2xl lg:text-xl xl:text-[20px] "
                    >
                      Cách đọc nghĩa ngược bài Tarot 
                    </p>
                    <h1 className=" relative  text-[24px] font-semibold title-font  text-black text-center mb-[5px] mt-[3px] " >
                      <span style={{display: 'inline-block', borderBottom: '2px solid black', width: 'auto'}}>Xem thêm</span>
                    </h1>
                  <div className=" inline-flex items-center">
                    <span className=" mb-5 inline-block py-1 px-4 text-center text-[16px] leading-loose flex items-center">
                      5 min <AiOutlineCalendar  className ="ml-2 mr-1  text-[18px]"/> 
                      <p className="">
                        12<span className="text-sm"><sup className="text-[10px]">th</sup></span> Oct 2022
                      </p>
                    </span>
                  </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mx-auto mb-10 max-w-[370px]">
                <div className="mb-8 overflow-hidden rounded">
                  <img
                    src={Blog2}
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div>
                  
                  <div className="text-center" >
                    <p
                      href=""
                      className="cursor-text text-dark mb-1 inline-block text-xl  sm:text-2xl lg:text-xl xl:text-[20px]"
                    >
                      Môi Trường Giải Bài Tarot
                    </p>
                    <h1 className=" relative  text-[24px] font-semibold title-font  text-black text-center mb-[5px] mt-[3px] " >
                      <span style={{display: 'inline-block', borderBottom: '2px solid black', width: 'auto'}}>Xem thêm</span>
                    </h1>
                    <div className=" inline-flex items-center">
                    <span className="text-[16px] mb-5 inline-block py-1 px-4 text-center text-[16px] leading-loose flex items-center">
                      5 min <AiOutlineCalendar  className ="ml-2 mr-1  text-[18px]"/> 
                      <p className="">
                        12<span className="text-sm"><sup className="text-[10px]">th</sup></span> Oct 2022
                      </p>
                    </span>
                  </div>
                  
                  </div>

                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mx-auto mb-10 max-w-[370px]">
                <div className="mb-8 overflow-hidden rounded">
                  <img
                    src={Blog3}
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div>
                 
                  <div  className="text-center">
                    <p
                      href=""
                      className=" cursor-text text-dark  mb-1 inline-block text-xl  sm:text-2xl lg:text-xl xl:text-[20px]"
                    >
                      Giải Bài Tarot Cho Bản Thân
                    </p>
                    <h1 className=" relative  text-[24px] font-semibold title-font  text-black text-center mb-[5px] mt-[3px] " >
                      <span style={{display: 'inline-block', borderBottom: '2px solid black', width: 'auto'}}>Xem thêm</span>
                    </h1>
                    <div className=" inline-flex items-center">
                    <span className="text-[16px] mb-5 inline-block py-1 px-4 text-center text-[16px] leading-loose flex items-center ">
                      5 min <AiOutlineCalendar  className ="ml-2 mr-1 text-[18px]"/> 
                      <p className="">
                        12<span className="text-sm"><sup className="text-[10px]" >th</sup></span> Oct 2022
                      </p>
                    </span>
                  </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
              <h1 className=" inline-block relative text-[20px] font-semibold title-font mb-4 text-black text-center my-20" >
                Xem thêm
                <span span style={{position: 'absolute', content: '',  height: '2px', bottom: '-16px', left: '-7px', right:'-7px', backgroundColor: 'black'}}></span>
              </h1>
          </div>
        
        </div>
      </section>
    </div>
  );
}

export default Blogs;
