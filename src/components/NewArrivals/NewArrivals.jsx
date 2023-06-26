import React from "react";
import CardA1 from "../../assets/cardA1.png"
import CardA2 from "../../assets/cardA2.png"
import CardA3 from "../../assets/cardA3.png"
import CardA4 from "../../assets/cardA4.png"


function NewArrivals() {
  return (
    <div>
      <section className="text-gray-400 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-[36px] font-semibold title-font mb-3 text-black">
            Hàng mới về
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-[16px]">
            Bài tarot ở đây chất lượng hơn cả người yêu cũ của bạn 
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" bg-opacity-40 p-6 rounded-lg">
                <img
                  className="rounded w-full object-cover object-center mb-6"
                  src="https://lttarot.com/wp-content/uploads/2023/05/Golden-Black-Cat-Tarot-600x600.jpg"
                  alt="content"
                />

                <h2 className="text-[16px] text-black font-medium title-font mb-1">
                Golden Black Cat Tarot
                </h2>
                <p className="leading-relaxed font-semibold text-[24px] text-black">799.000 VNĐ</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" bg-opacity-40 p-6 rounded-lg">
                <img
                  className="rounded w-full object-cover object-center mb-6"
                  src="https://lttarot.com/wp-content/uploads/2015/09/Dark-Fairytale-Tarot.jpg"
                  alt="content"
                />

                <h2 className="text-[16px] text-black font-medium title-font mb-1">
                Dark Fairytale Tarot
                </h2>
                <p className="leading-relaxed font-semibold text-[24px] text-black">599.000 VNĐ</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" bg-opacity-40 p-6 rounded-lg">
                <img
                  className="rounded w-full object-cover object-center mb-6"
                  src="https://lttarot.com/wp-content/uploads/2016/11/After-Tarot.jpg"
                  alt="content"
                />

                <h2 className="text-[16px] text-black font-medium title-font mb-1">
                After Tarot 
                </h2>
                <p className="leading-relaxed font-semibold text-[24px] text-black">599.000 VNĐ</p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" bg-opacity-40 p-6 rounded-lg">
                <img
                  className="rounded w-full object-cover object-center mb-6"
                  src="https://lttarot.com/wp-content/uploads/2016/05/Animal-Totem-Tarot.jpg"
                  alt="content"
                />

                <h2 className="text-[16px] text-black font-medium title-font mb-1">
                Animal Totem Tarot
                </h2>
                <p className="leading-relaxed font-semibold text-[24px] text-black">800.000 VNĐ</p>
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

export default NewArrivals;
