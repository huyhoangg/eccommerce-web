import { Input ,Checkbox , Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";



function Register(){
  const [showPass,setshowPass] = useState(false)
  const [showCPass,setshowCPass] = useState(false)

    return(
      // <section className=" bg-gray-200 w-full min-h-screen flex items-center justify-center backdrop-blur-sm bg-no-repeat bg-center bg-cover">
      //   <div className="w-full h-screen bg-gray-900/50 backdrop-blur-[1px] flex justify-center items-center">
      //     <div className="container mx-auto ">
      //     <div className="flex justify-center px-6 my-12">
      //       <div className="w-full xl:w-3/4 lg:w-11/12 flex ">
      //         <div
      //           className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg bg-[url(https://images.unsplash.com/photo-1683217956207-61871d9eea1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk0fHx0YXJvdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60)] bg-no-repeat backdrop-blur-sm  bg-center "
            
      //           >

      //           </div>
      //           <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
      //             <h3 className="pt-4 text-2xl text-center ">Tạo tài khoản !!!</h3>
      //             <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
      //               <div className="mb-4 md:flex md:justify-between">
      //                 <div className="mb-4 md:mr-2 md:mb-0">
      //                   <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
      //                     Name
      //                   </label>
      //                   <input
      //                     className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-600 rounded shadow appearance-none  focus:shadow-outline"
      //                     id="name"
      //                     type="text"
      //                     placeholder="Name"
      //                   />
      //                 </div>
      //                 <div className="md:ml-2">
      //                   <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
      //                     Username
      //                   </label>
      //                   <input
      //                     className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none  focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-600 focus:shadow-outline"
      //                     id="lastName"
      //                     type="text"
      //                     placeholder="Username"
      //                   />
      //                 </div>
      //               </div>
      //               <div className="mb-2">
      //                 <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
      //                   Email
      //                 </label>
      //                 <input 
      //                   className="peer  w-full px-3 py-2 mb-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none   focus:outline-none  focus:ring-1 focus:ring-gray-600
      //                   disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      //                   invalid:border-pink-500 invalid:text-pink-600
      //                   focus:invalid:border-pink-500 focus:invalid:ring-pink-500 invalid:focus:outline-none "
      //                   id="email"
      //                   type="email"
      //                   placeholder="Email"
      //                 />
      //                   <p class=" invisible peer-invalid:visible text-pink-600 text-sm">
      //                     Nhập sai tài khoản gmail !!!
      //                   </p>
      //               </div>
      //               <div className="mb-4 md:flex md:justify-between">
      //                 <div className=" mb-4 md:mr-2 md:mb-0">
      //                   <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
      //                     Password
      //                   </label>
      //                   <div className="flex relative ">
      //                     <input
      //                       className="w-full pl-3 pr-8 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none  focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-600 focus:shadow-outline"
      //                       id="password"
                            
      //                       type={showPass ? "text" : "password"}
      //                       placeholder="***********************"
      //                     />
      //                     <button  type="button"  onClick={() => setshowPass(!showPass)} className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700 mt-[7.5px]">
      //                     {showPass ? (
      //                         <svg className="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" ></path>
      //                         </svg>
      //                       ) : (
      //                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
      //                         </svg>
      //                       )}
      //                     </button>
      //                   </div>
      //                 </div>
      //                 <div className="md:ml-2">
      //                   <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
      //                     Confirm Password
      //                   </label>
      //                   <div className="flex relative ">
      //                     <input
      //                       className="w-full pl-3 pr-8 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none  focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-600 focus:shadow-outline"
      //                       id="c_password"
      //                       type={showCPass ? "text" : "password"}
      //                       placeholder="***********************"
                            
      //                     />
      //                     <button  type="button"  onClick={() => setshowCPass(!showCPass)} className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700 mt-[7.5px]">
      //                     {showCPass ? (
      //                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" ></path>
      //                         </svg>
      //                       ) : (
      //                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      //                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
      //                         </svg>
      //                       )}
      //                     </button>
      //                   </div>
      //                 </div>
      //               </div>
      //               <div className="mb-6 text-center">
      //                 <button
      //                   className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      //                   type="button"
      //                 >
      //                   Đăng Ký
      //                 </button>
      //               </div>
      //               <hr className="mb-6 border-t" />
                  
      //               <div className="text-center">
      //                 <span
      //                   className="inline-block text-sm  align-baseline "
      //                   href=""
      //                 >
      //                   Bạn đã có tài khoản? 
      //                   <Link to = "/login" className="text-blue-700 hover:text-blue-500"> Đăng Nhập </Link>
      //                 </span>
      //               </div>
      //             </form>
      //           </div> 
      //       </div>
      //     </div>
      //     </div>
      //   </div>

      // </section>

      <div class="flex flex-wrap">
      <img
      src="https://images.unsplash.com/flagged/photo-1624274555889-4a70c880579c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRhcm90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
      alt="Photo by Lawrence Kayku on Unsplash"
      class="w-full h-48 object-cover sm:h-screen sm:w-7/12 invisible sm:visible" />

    <div class="w-full sm:w-5/12 mb-10">
      <div class="container mx-auto h-full lg:p-10">
        <header class="container mx-auto px-4 py-2 mt-10 lg:flex items-center h-full lg:mt-0">
          <div class="w-full">
            <h1 class="text-2xl font-bold lg:text-4xl">Đăng ký <span class="text-blue-600">tài khoản</span></h1>
            <div class="w-24 h-2 bg-blue-300 my-4"></div>
            <div class="mt-10">
            <form className=" bg-white rounded">
              <div className="mb-4 md:flex md:justify-between">
              <div className="w-full mb-4 md:mr-2 md:mb-0">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                    Name
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-600 rounded shadow appearance-none  focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="w-full  md:ml-2">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                  Username
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none  focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-600 focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="mb-2">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                Email
              </label>
              <input 
                className="peer  w-full px-3 py-2 mb-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none   focus:outline-none  focus:ring-1 focus:ring-gray-600
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500 invalid:focus:outline-none "
                id="email"
                type="email"
                placeholder="Email"
              />
                <p class=" invisible peer-invalid:visible text-pink-600 text-sm">
                  Nhập sai tài khoản gmail !!!
                </p>
            </div>
            <div className="mb-4 md:flex md:justify-between">
              <div className="w-full   mb-4 md:mr-2 md:mb-0">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                  Password
                </label>
                <div className="flex relative ">
                  <input
                    className="w-full pl-3 pr-8 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none  focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-600 focus:shadow-outline"
                    id="password"
                    
                    type={showPass ? "text" : "password"}
                    placeholder="***************************************"
                  />
                  <button  type="button"  onClick={() => setshowPass(!showPass)} className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700 mt-[7.5px]">
                  {showPass ? (
                      <svg className="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" ></path>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="w-full   md:ml-2">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
                  Confirm Password
                </label>
                <div className="flex relative ">
                  <input
                    className="w-full pl-3 pr-8 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none  focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-600 focus:shadow-outline"
                    id="c_password"
                    type={showCPass ? "text" : "password"}
                    placeholder="***************************************"
                    
                  />
                  <button  type="button"  onClick={() => setshowCPass(!showCPass)} className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700 mt-[7.5px]">
                  {showCPass ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" ></path>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-2xl hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Đăng Ký
              </button>
            </div>
            <hr className="mb-6 border-t" />
          
            
          </form>
              <div class="flex  flex-col justify-center items-center mt-6">
              <span
                className="md:text-[15px] inline-block text-sm text-gray-600 align-baseline"
                href=""
              >
                 Bạn đã có tài khoản? 
              </span>
              <Link to="/login" className="text-red-700 hover:text-red-500  no-underline hover:underline hover:underline-offset-4 cursor-pointer transition ease-in duration-300"> Đăng Nhập</Link>
              </div>
            </div>
          </div>

        </header>
      </div>
    </div>
  </div>
    )
}

export default Register