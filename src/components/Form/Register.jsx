import { Input, Checkbox, Button } from "@material-tailwind/react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "~/contexts/AuthContext";

function Register() {
  const [showPass, setshowPass] = useState(false);
  const [showCPass, setshowCPass] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [redirect, setRedirect] = useState(false);

  const authContext = useContext(AuthContext);

  async function handleRegisterSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("/v1/auth/register", {
        email,
        username,
        password,
        firstName: fullname,
      });
      const user = await axios.post("/v1/auth/login", { email, password });
      authContext.setUserInfo(user.data);
      console.log("register successful");
      console.log("login successful");
      setRedirect(true);
    } catch (e) {
      setErrorMessage("error");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="flex flex-wrap">
      <img
        src="https://images.unsplash.com/photo-1671377914227-397fa571a7e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg1fHx0YXJvdCUyMGNhcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        alt="Photo by Lawrence Kayku on Unsplash"
        className="w-full h-48 object-cover sm:h-screen sm:w-7/12 invisible sm:visible"
      />

      <div className="w-full sm:w-5/12 mb-10">
        <div className="container mx-auto h-full lg:p-10">
          <header className="container mx-auto px-4 py-2 mt-10 lg:flex items-center h-full lg:mt-0">
            <div className="w-full">
              <h1 className="text-2xl font-bold lg:text-4xl">
                Đăng ký <span className="text-blue-600">tài khoản</span>
              </h1>
              <div className="w-24 h-2 bg-blue-300 my-4"></div>
              <div className="mt-10">
                <form
                  className=" bg-white rounded"
                  onSubmit={handleRegisterSubmit}
                >
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="w-full mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="firstName"
                      >
                        Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-600 rounded shadow appearance-none  focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                      />
                    </div>
                    <div className="w-full  md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="lastName"
                      >
                        Username
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none  focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-600 focus:shadow-outline"
                        id="lastName"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="email"
                    >
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className=" invisible peer-invalid:visible text-pink-600 text-sm">
                      Nhập sai tài khoản gmail !!!
                    </p>
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="w-full   mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <div className="flex relative ">
                        <input
                          className="w-full pl-3 pr-8 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none  focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-600 focus:shadow-outline"
                          id="password"
                          type={showPass ? "text" : "password"}
                          placeholder="***************************************"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                          type="button"
                          onClick={() => setshowPass(!showPass)}
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
                    <div className="w-full   md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlFor="c_password"
                      >
                        Confirm Password
                      </label>
                      <div className="flex relative ">
                        <input
                          className="w-full pl-3 pr-8 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none  focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-600 focus:shadow-outline"
                          id="c_password"
                          type={showCPass ? "text" : "password"}
                          placeholder="***************************************"
                          value={cfPassword}
                          onChange={(e) => setCfPassword(e.target.value)}
                        />
                        <button
                          type="button"
                          onClick={() => setshowCPass(!showCPass)}
                          className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700 mt-[7.5px]"
                        >
                          {showCPass ? (
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
                  </div>
                  <p className="text-red-400">{errorMessage}</p>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-2xl hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Đăng Ký
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                </form>
                <div className="flex  flex-col justify-center items-center mt-6">
                  <span
                    className="md:text-[15px] inline-block text-sm text-gray-600 align-baseline"
                    href=""
                  >
                    Bạn đã có tài khoản?
                  </span>
                  <Link
                    to="/login"
                    className="text-red-700 hover:text-red-500  no-underline hover:underline hover:underline-offset-4 cursor-pointer transition ease-in duration-300"
                  >
                    {" "}
                    Đăng Nhập
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

export default Register;
