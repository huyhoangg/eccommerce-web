import { BreadCrumb } from "~/components/NavBar/BreadCrumb";


export const SiteHeader = (props) => {
  return (
    <header>
      <div className="w-full bg-center bg-cover h-[30rem] bg-[url(https://images.unsplash.com/photo-1627764574958-fb54cd7d7448?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80)] backdrop-blur-sm">
        <div className="mt-[80px] flex items-center justify-center w-full h-full bg-gray-900/50 backdrop-blur-[1px]">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-6xl mb-7">
              {props.head}
            </h1>
            <BreadCrumb title={props.head}/>
          </div>
        </div>
      </div>
    </header>
  );
};
