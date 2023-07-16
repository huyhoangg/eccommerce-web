import { Input ,Checkbox , Button } from "@material-tailwind/react";

function Register(){
    return(
      <section className=" mx-auto lg:w-1/2 md:px-32 px-0  ">
        <form>
            <div
              className="flex flex-row items-center justify-center lg:justify-start">
              <p className="mb-0 text-[30px] font-bold mr-4 text-lg mt-12">Register</p>
            </div>

            <div className="relative my-6" data-te-input-wrapper-init>
                <label className= "text-gray-900 mb-5 block text-[19px] " htmlFor="">Email address</label>
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

            <div className="text-justify font-thin">
              <span className=" text-gray-700 text-[16px] tracking-[0.3px]">
              A link to set a new password will be sent to your email address.
                <br className="mb-3"></br>
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our 
              <a href="" className="font-bold text-black"> privacy policy</a>.
              </span>
            </div>

            <div className="text-center lg:text-left mt-11 ">
            <Button variant="outlined" color="blue-gray" className="text-gray-800 rounded-[10px] py-[13px] px-[50px] border-black ">Log In</Button>
            </div>
        </form>
      </section>
    )
}

export default Register