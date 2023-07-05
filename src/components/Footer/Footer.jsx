import React from "react";
 
function Footer() {
  return (
    <div>
      <footer className="bg-white ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
        <div class="grid grid-cols-10 ">
            <div class="col-span-3 mb-6 md:mb-0 ">
              <a href="" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 mr-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-gray-600 text-[16px] font-semibold whitespace-nowrap dark:text-black">
                  Địa chỉ shop
                </span>
              </a>
            </div>
            <div class="col-span-7 grid grid-cols-4 gap-8 sm:gap-6">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-600   ">
                  Links
                </h2>
                <ul className="text-gray-900 dark:text-black font-semibold">
                  <li className="mb-6">
                    <a href="" className="hover:underline">
                      Trang chủ
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="" className="hover:underline">
                      Cửa hàng
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="" className="hover:underline">
                      Về chúng tôi
                    </a>
                  </li>
                  <li className="mb-6">
                    <a href="" className="hover:underline">
                     Liên hệ
                    </a>
                  </li>
                </ul>
              </div>
             
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-600  dark:text-black">
                  Trợ giúp
                </h2>
                <ul className=" text-black font-semibold">
                  <li className="mb-6">
                    <a
                      href=""
                      className="hover:underline "
                    >
                      Các phương thức thanh toán
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href=""
                      className="hover:underline"
                    >
                      Hoàn tiền
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      href=""
                      className="hover:underline"
                    >
                      Chính sách & quyền riêng tư
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-600   ">
                  Liên Hệ
                </h2>
                <ul className="text-gray-900 dark:text-black font-semibold">
                  <li className="mb-6">
                    <form action="#" className="flex items-center">
                      <input type="email" placeholder="Enter your email address" className="border-b border-black outline-none pr-4  flex-1"/>
                      <button type="submit" className="border-b border-black  ml-2">SUBSCRIBE</button>
                    </form>
                  </li>
                </ul>
              </div>
              
            
            </div>
          </div>
          <div className="border-b  mt-8" style={{borderColor: '#D9D9D9'}}></div>
          <p className="text-[14px] text-gray-700 pt-6">2022 Meubel House. All rights reverved</p>
        </div>
      <div>

      </div>

      </footer>
    
    
    </div>


  );
}

export default Footer;
