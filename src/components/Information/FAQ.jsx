import React from "react";
import Footer from "~/components/Footer/Footer";
import NavBar from "~/components/NavBar/NavBar";
import  BreadC from "~/components/Information/BreadC";
import { Link, useParams } from "react-router-dom";
import {MdOutlinePolicy} from "react-icons/md"
function FAQ(props) {
  return (
    <div>
      <NavBar/>
     <BreadC page = {props.breadc} />
     <section className="flex items-center bg-gray-100 dark:bg-gray-800 font-poppins py-10">
        <div className="max-w-5xl p-4 mx-auto">
            <div className="text-center mb-14">
            <h2
            className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-gray-700 dark:text-gray-300 md:text-5xl">
           {"Frequently Asked Questions" } </h2>
           <h3 className="mb-6 text-3xl font-bold leading-tight tracking-tighter text-blue-700 dark:text-gray-300 md:text-4xl">{props.title||""}</h3>
                <p className="max-w-xl mx-auto text-gray-500">
                    {props.para||"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae quam nostrum harum non in at eaque quibusdam eum ratione."}</p>
            </div>
            <div className="max-w-4xl mx-auto mb-12">
                <div className="flex flex-wrap -mx-4 md:flex-nowrap justify-center">
                    
                    <div className="w-full px-4 mb-6 md:w-1/3 lg:w-1/5 lg:mb-0">
                        <Link to="/faq/payment">
                            <button className={`w-full py-6 rounded-xl dark:bg-gray-700 dark:hover:bg-gray-900  ${props.onPaymentPage ? 'bg-blue-400 hover:bg-yellow-500 text-white' : 'hover:bg-blue-100 text-gray-500 bg-gray-300'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-8 h-8 mx-auto mb-5  dark:text-gray-400 bi bi-credit-card-2-back"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                    <path
                                        d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                                </svg>
                                <p className="text-lg font-semibold  dark:text-gray-400">Payments</p>
                            </button>
                        </Link>
                    </div>
                    <div className="w-full px-4 mb-6 md:w-1/3 lg:w-1/5 md:mb-0">
                        <Link to="/faq/refund">
                            <button className={`w-full py-6 rounded-xl dark:bg-gray-700 dark:hover:bg-gray-900  ${props.onRefundPage  ? 'bg-blue-400 text-white' : 'hover:bg-blue-100 text-gray-500 bg-gray-300'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-8 h-8 mx-auto mb-5  dark:text-gray-400 bi bi-arrow-down-up"
                                    viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                                <p className="text-lg font-semibold  dark:text-gray-400 ">Refund</p>
                            </button>
                        </Link>
                    </div>
                    <div className="w-full px-3 mb-6 md:w-1/3 lg:mb-0 lg:w-1/5">
                        <Link to="/faq/policy">
                            <button className={`w-full py-6 rounded-xl dark:bg-gray-700 dark:hover:bg-gray-900  ${props.onPolicyPage ? 'bg-blue-400 text-white' : 'hover:bg-blue-100 text-gray-500 bg-gray-300'}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="w-8 h-8 mx-auto mb-5  dark:text-gray-400 bi bi-gear"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                        <path
                                            d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                        </svg>
                                    <p className="text-lg font-semibold  dark:text-gray-400 ">Policy</p>
                            </button>
                        </Link>

                    </div>
                   
                </div>
            </div>
            <div className="w-full">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                            className="mr-4 text-blue-500 dark:text-blue-400 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                        </svg>
                        <div className="flex-1">
                            <span className="font-bold dark:text-white">
                                What is Components ? How does it help us?
                            </span>
                            <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
                                Components are pre made web structures which are used for making a website faster
                                and easier. It
                                is a sort of a boilerplate code which gives you an option to modify it however you
                                want
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                            className="mr-4 text-blue-500 dark:text-blue-400 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                        </svg>
                        <div className="flex-1">
                            <span className="font-bold dark:text-white">
                                What is Components ? How does it help us?
                            </span>
                            <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
                                Components are pre made web structures which are used for making a website faster
                                and easier. It
                                is a sort of a boilerplate code which gives you an option to modify it however you
                                want
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                            className="mr-4 text-blue-500 dark:text-blue-400 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                        </svg>
                        <div className="flex-1">
                            <span className="font-bold dark:text-white">
                                What is Components ? How does it help us?
                            </span>
                            <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
                                Components are pre made web structures which are used for making a website faster
                                and easier. It
                                is a sort of a boilerplate code which gives you an option to modify it however you
                                want
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                            className="mr-4 text-blue-500 dark:text-blue-400 bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                        </svg>
                        <div className="flex-1">
                            <span className="font-bold dark:text-white">
                                What is Components ? How does it help us?
                            </span>
                            <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 answer">
                                Components are pre made web structures which are used for making a website faster
                                and easier. It
                                is a sort of a boilerplate code which gives you an option to modify it however you
                                want
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </div>
  );
}

export default FAQ;
