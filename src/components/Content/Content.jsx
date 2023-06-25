import React from "react";

function Content() {
  return (
    <div>
      <section className="text-black bg-secondary body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 ">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1201x501"
                />
              </div>
              <h2 className="title-font text-2xl font-medium  mt-6 mb-3">
                Buy YouTube Videos
              </h2>
              <p className="leading-relaxed text-base underline">Xem thêm</p>
            </div>

            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://dummyimage.com/1201x501"
                />
              </div>
              <h2 className="title-font text-2xl font-medium  mt-6 mb-3">
                Buy YouTube Videos
              </h2>
              <p className="leading-relaxed text-base underline">Xem thêm</p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
