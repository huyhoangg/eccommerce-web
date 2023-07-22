import { Input ,Checkbox , Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPass (){
    return (
//         <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//             <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//                 <div
//                     className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
//                 </div>
//                 <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//                     <div className="max-w-md mx-auto">
//                         <div>
//                             <h1 className="text-2xl font-semibold">Login Form with Floating Labels</h1>
//                         </div>
//                         <div className="divide-y divide-gray-200">
//                             <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                                 <div className="relative">
//                                     <input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
//                                     <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
//                                 </div>
//                                 <div className="relative">
//                                     <input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
//                                     <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
//                                 </div>
//                                 <div className="relative">
//                                     <button className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
// </div>

<div className="min-h-screen bg-gray-100 py-6  flex flex-col justify-center">
        <div className="max-w-4xl mx-auto ">
            <div className=" relative flex flex-col items-center justify-center  p-4 space-y-4 antialiased text-gray-900 bg-gray-100 z-999">
                <div className="max-w-lg relative w-full bg-white  ">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                     <div className="bg-white relative w-full px-8  space-y-6 rounded-md py-16 z-10 ">
                     <h1 className=" mb-6 text-3xl font-bold text-center  " >
                            Quên mật khẩu ? 
                        </h1>
                        <p className="text-center mx-12">
                        Nhập email và password mới để tạo mới mật khẩu</p>
                        <form action="#" className="space-y-6 w-ful">
                            <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-100"
                            type="email" name="email" placeholder="Email address" required=""/>
                            <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-100"
                            type="password"  placeholder="Password" required=""/>
                            <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary-100"
                            type="password"  placeholder="Confirm Password" required=""/>
                            <div>
                            <button type="submit"
                                className="w-full px-4 py-2 font-medium text-center text-white bg-indigo-500 hover:bg-indigo-600 transition-colors duration-200 rounded-md  hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1">
                            Đổi mật khẩu
                            </button>
                            </div>
                        </form>
                        <div className="text-sm text-gray-600 items-center flex justify-between">
                            <Link to="/login" p className="text-gray-800 cursor-pointer hover:text-blue-500 inline-flex items-center ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                clip-rule="evenodd" />
                            </svg>
                            Quay Lại</Link>
                            <Link to="/register" className="text-gray-800 hover:text-blue-500 cursor-pointer "> Đăng Ký</Link>
                           </div> 
                 </div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default ForgotPass