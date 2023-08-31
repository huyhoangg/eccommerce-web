import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "~/contexts/AuthContext";
import { toast } from "react-toastify";

function Login() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const authContext = useContext(AuthContext);

  async function handleLoginSubmit(e) {
    e.preventDefault();
    try {
      const user = await axios.post("/v1/auth/login", { email, password });
      authContext.setUserInfo(user.data);
      console.log("login successful");
      toast.success(`welcome, ${user.data.username}`)

    } catch (e) {
      setErrorMessage(e.response.data);
    }
  }



  return (
    <div className="flex flex-wrap">
      <img
        src="https://images.unsplash.com/photo-1600429991827-5224817554f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        alt="Photo by Lawrence Kayku on Unsplash"
        className="w-full h-48 object-cover sm:h-screen sm:w-7/12 invisible sm:visible"
      />

      <div className="w-full sm:w-5/12 mb-10">
        <div className="container mx-auto h-full lg:p-10">
          <header className="container mx-auto px-4 py-2 mt-10 lg:flex items-center h-full lg:mt-0">
            <div className="w-full">
              <h1 className="text-2xl font-bold lg:text-4xl">Đăng nhập </h1>
              <div className="w-24 h-2 bg-yellow-300 my-4"></div>
              <div className="mt-10">
                <form action="#" className="" onSubmit={handleLoginSubmit}>
                  <div className="flex flex-col mb-5">
                    <label
                      for="email"
                      className="mb-1 md:mb-3 md:text-[16px] text-xs tracking-wide text-gray-600"
                    >
                      Username hoặc Email{" "}
                    </label>
                    <div className="relative">
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-600 focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email/Username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <p className="text-red-500 ">
                      {errorMessage === "invalid email" && errorMessage}
                    </p>
                  </div>
                  <div className="flex flex-col mb-3">
                    <label
                      for="password"
                      className="mb-1 md:mb-3 md:text-[16px] text-xs sm:text-sm tracking-wide text-gray-600"
                    >
                      Password
                    </label>
                    <div className="relative flex">
                      <input
                        className="w-full pl-3 pr-8 py-2 mb-0 md:mb-1 text-sm leading-tight text-gray-700 border rounded shadow appearance-none   focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-600 focus:shadow-outline"
                        id="password"
                        type={showPass ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPass(!showPass)}
                        className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700 mt-[7.5px]"
                      >
                        {showPass ? (
                          <svg
                            className="w-5 h-5 "
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            ></path>
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                            ></path>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <p className="text-red-500 ">
                    {errorMessage === "invalid password" && errorMessage}
                  </p>

                  <div className="my-4 px-2 flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember_me"
                        type="checkbox"
                        className="border border-gray-300 text-yellow-500 shadow-sm focus:ring-opacity-50 cursor-pointer"
                      />
                      <label
                        for="remember_me"
                        className="ml-2 block text-sm leading-5 text-gray-900 "
                      >
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                    <Link
                      to="/forgotpass"
                      className="text-sm hover:text-gray-800"
                    >
                      Quên mật khẩu?{" "}
                    </Link>
                  </div>

                  <div className="flex w-full">
                    <button
                      type="submit"
                      className=" flex mt-2 items-center justify-center focus:outline-none  text-black text-sm mb-6
                      sm:text-base bg-gradient-to-r from-yellow-500 to-yellow-600  hover:bg-gradient-to-l hover:from-yellow-500 hover:to-yellow-600 rounded-2xl py-2 w-full transition duration-150 ease-in"
                    >
                      <span className="mr-2 uppercase">Đăng nhập</span>
                      <span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                </form>

                <div className="flex flex-col justify-center items-center mt-6">
                  <span
                    className="md:text-[15px] inline-block text-sm text-gray-600 align-baseline"
                    href=""
                  >
                    Bạn mới biết đến Mystic Friend?
                  </span>
                  <Link
                    to="/register"
                    className="text-red-700 hover:text-red-500  no-underline hover:underline hover:underline-offset-4 cursor-pointer transition ease-in duration-300"
                  >
                    {" "}
                    Đăng Ký
                  </Link>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}

export default Login;
