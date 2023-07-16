import { Input ,Checkbox , Button } from "@material-tailwind/react";

function Login(){
    return(
      <section className=" mx-auto lg:w-1/2  md:px-32 px-0 ">
        <form>
          <div
            className="flex flex-row items-center justify-center lg:justify-start">
           <p className="mb-0 text-[30px] font-bold mr-4 text-lg mt-12">Log In</p>
          </div>


          <div className="relative my-6 mb-6" >
          <label className= "text-gray-900 mb-5 block text-[19px]" htmlFor="">Username or Email address</label>
            <Input
              variant="static"
              type="text"
              className="overflow-hidden text-[27px] w-10/12"
              style={{
                border: '1px solid #b0bec5',
                borderRadius: '0.375rem',
                padding: '1.7rem 0.75rem',
              }}
            />
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
          <label className= "text-gray-900 mb-5 block text-[19px] mt-10  " htmlFor="">Password</label>
            <Input
              variant="static"
              type="password"
              className="overflow-hidden text-[27px] w-10/12" 
              style={{
                border: '1px solid #b0bec5',
                borderRadius: '0.375rem',
                padding: '1.7rem 0.75rem',
              }}
            />
          </div>

          <div className=" my-6">
          <Checkbox 
            className="overflow-visible before:w-0 "
            containerProps={{ className: "p-0 my-[0.75rem] mr-[0.75rem] rounded" }}
            label = "Remember me "
            />
          </div>

          <div className="text-center lg:text-left">
          <Button variant="outlined"  color="blue-gray" className=" text-gray-800  rounded-[10px]  py-[13px] px-[50px] border-black" >Log In</Button>
            <a className = " text-f text-gray-700 ml-[20px] hover:text-gray-800" href="#!">Lost your password ? </a>
          </div>
        </form>
      </section>
    )
}

export default Login