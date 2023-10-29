import { GrMail } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className="h-[90px] w-[100%] relative m-1 items-center flex flex-row place-content-between p-2 md:p-10 md:m-10">
      <div className="flex flex-row m-5 items-center justify-center space-x-12 md:m-10">
        <div>
          <h1 className="font-outfit text-2xl text-white md:text-4xl">Zyper</h1>
        </div>
        <div>
          <p className="font-inconsolata text-xl text-white mt-4 ml-6 cursor-pointer underline hidden md:flex">
            <span className="text-[#7a85ff] font-bold">/</span>home
          </p>
        </div>
        <div>
          <p className="font-inconsolata text-xl text-white mt-4 cursor-pointer underline hidden md:flex">
            <span className="text-[#7a85ff] font-bold">/</span>stack
          </p>
        </div>
        <div>
          <p className="font-inconsolata text-xl text-white mt-4 cursor-pointer underline hidden md:flex">
            <span className="text-[#7a85ff] font-bold">/</span>portfolio
          </p>
        </div>
        <div>
          <p className="font-inconsolata text-xl text-white mt-4 cursor-pointer underline hidden md:flex">
            <span className="text-[#7a85ff] font-bold">/</span>donate
          </p>
        </div>
      </div>
      <div>
        <div className="m-10 h-10 w-40 bg-[#616dff] flex rounded text-white items-center justify-center cursor-pointer font-outfit hover:scale-105 ease-in duration-200 hidden lg:flex">
          <GrMail className="mr-2" />
          Contact Me
        </div>
        <div className="m-10 h-10 w-10 bg-[#616dff] text-center flex rounded-full text-white items-center justify-center cursor-pointer font-outfit hover:scale-105 ease-in duration-200 hidden md:flex lg:hidden">
          <GrMail size={20} />
        </div>
        <div className="m-5 h-10 mt-4 w-10 bg-[#616dff] text-center flex rounded-full text-white items-center justify-center cursor-pointer font-outfit hover:scale-105 ease-in duration-200 md:hidden lg:hidden">
          <GiHamburgerMenu size={20} />
        </div>
      </div>
    </nav>
  );
}
