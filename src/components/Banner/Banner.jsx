
import React from 'react'
function Banner (){
    return (
        <section class=" text-gray-600 body-font py-3 md:py-16 mt-3 md:mt-24  bg-primary ">
                <div className="container px-0 md:px-5 mx-auto flex justify-between md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">   

                <div class=" lg:w-1/4  ">
                    <div class="h-full flex items-start border-b md:border-b-0 border-black  ">
                    <div class="flex-grow ">
                        <h1 class="title-font text-3xl font-bold text-gray-900 mb-3 text-center md:text-left">Free Delivery</h1>
                        <p class="leading-relaxed mb-5 tracking-[0.3px] p-1 md:p-0">For all oders over $50, consectetur adipim scing elit.</p>
                    </div>
                    </div>
                </div>
                
                <div class=" lg:w-1/4">
                    <div class="h-full flex items-start border-b md:border-b-0 border-black my-3 md:my-0 ">
                
                        <div class="flex-grow ">
                            
                            <h1 class="title-font text-3xl font-bold text-gray-900 mb-3 text-center md:text-left">90 Days Return</h1>
                            <p class="leading-relaxed mb-5 tracking-[0.3px] p-1 md:p-0">If goods have problems, consectetur adipim scing elit.</p>
                        </div>
                    </div>
                </div>

                <div class=" lg:w-1/4">
                    <div class="h-full flex items-start">
                
                    <div class="flex-grow ">
                        
                        <h1 class="title-font text-3xl font-bold text-gray-900 mb-3 text-center md:text-left">Secure Payment</h1>
                        <p class="leading-relaxed mb-5 tracking-[0.3px] p-1 md:p-0">100% secure payment, consectetur adipim scing elit.</p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Banner