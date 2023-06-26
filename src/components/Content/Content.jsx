import React from "react";
import Card1 from "../../assets/Card1.png"
import Card2 from "../../assets/Card2.png"

function Content() {
  return (
    <div>
      <section className="text-black bg-secondary body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 ">
            <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg overflow-hidden " >
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={Card1}
              />
            </div>

              <h2 className="title-font text-[36px] font-semibold  mt-6 mb-3">
                Bài Oracle
              </h2>
              <h1 className=" inline-block relative text-[25px] font-semibold title-font mt-3 text-black " >
                Xem thêm
                <span span style={{position: 'absolute', content: '',  height: '2px', bottom: '-16px', left: '-7px', right:'-7px', backgroundColor: 'black'}}></span>
              </h1>
            </div>

            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-[560px] w-full"
                  src={Card2}
                />
              </div>
              <h2 className="title-font  text-[36px] font-semibold  mt-6 mb-3 ">
               Bài Tarot
              </h2>
              <h1 className=" inline-block relative text-[25px] font-semibold title-font mt-3 text-black " >
                Xem thêm
                <span span style={{position: 'absolute', content: '',  height: '2px', bottom: '-16px', left: '-7px', right:'-7px', backgroundColor: 'black'}}></span>
              </h1>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
