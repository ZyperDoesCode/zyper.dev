"use client";

import { GrMail } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Navbar() {
  const [navRelease, setNavRelease] = useState(false);
  const [navClass, setNavClass] = useState(null);

  return (
    <div className="flex flex-col w-screen overflow-hidden ">
      <nav className="z-[100] h-25 w-[100%] relative items-center flex flex-row place-content-between pt-5 pl-5 pr-5 md:pt-20 md:pl-20 md:pr-20">
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
              <span className="text-[#7a85ff] font-bold">/</span>patron
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
          <div
            className="h-10 w-10 bg-[#616dff] text-center flex rounded-lg text-white items-center justify-center cursor-pointer font-outfit hover:scale-105 ease-in duration-200 md:hidden lg:hidden"
            onClick={() => {
              if (navClass == "open") {
                setNavClass("close")
                setTimeout(() => {
                  setNavRelease(!navRelease);
                }, 400);
              } else {
                setNavRelease(true);
                setNavClass("open");
              }
            }}
          >
            <GiHamburgerMenu size={20} />
          </div>
        </div>
      </nav>
      {navRelease ? (
        <nav
          className={
            "flex-col h-[10rem] min-w-screen bg-[#04020a] flex md:hidden " +
            navClass
          }
        >
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
      ) : (
        <></>
      )}
    </div>
  );
}
