import { GrMail } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <div className="flex flex-col w-screen overflow-hidden">
      <nav className="h-25 w-[100%] relative items-center flex flex-row place-content-between pt-5 pl-5 pr-5 md:pt-20 md:pl-20 md:pr-20">
        <div className="flex flex-row items-center justify-center md:space-x-12">
          <div>
            <h1 className="font-kronaone text-2xl text-white md:text-4xl">
              Zyper
            </h1>
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
          <div className="h-10 w-40 bg-[#616dff] flex rounded text-white items-center justify-center cursor-pointer font-outfit hover:scale-105 ease-in duration-200 hidden lg:flex">
            <GrMail className="mr-2" />
            Contact Me
          </div>
          <div className="h-10 w-10 bg-[#616dff] text-center flex rounded-full text-white items-center justify-center cursor-pointer font-outfit hover:scale-105 ease-in duration-200 hidden md:flex lg:hidden">
            <GrMail size={20} />
          </div>
          <div className="h-10 w-10 bg-[#616dff] text-center flex rounded-full text-white items-center justify-center cursor-pointer font-outfit hover:scale-105 ease-in duration-200 md:hidden lg:hidden">
            <GiHamburgerMenu size={20} />
          </div>
        </div>
      </nav>
      <nav className="flex-col h-[10rem] bg-white min-w-screen bg-black flex md:hidden">
        <div className="h-[2.5rem] min-w-screen items-center justify-center flex">
          <p className="font-outfit text-xl text-white cursor-pointer underline">
            <span className="text-[#7a85ff] font-bold">/</span>home
          </p>
        </div>
        <div className="h-[2.5rem] min-w-screen items-center justify-center flex">
          <p className="font-outfit text-xl text-white cursor-pointer underline">
            <span className="text-[#7a85ff] font-bold">/</span>stack
          </p>
        </div>
        <div className="h-[2.5rem] min-w-screen items-center justify-center flex">
          <p className="font-outfit text-xl text-white cursor-pointer underline">
            <span className="text-[#7a85ff] font-bold">/</span>portfolio
          </p>
        </div>
        <div className="h-[2.5rem] min-w-screen items-center justify-center flex">
          <p className="font-outfit text-xl text-white cursor-pointer underline">
            <span className="text-[#7a85ff] font-bold">/</span>donate
          </p>
        </div>
      </nav>
    </div>
  );
}
