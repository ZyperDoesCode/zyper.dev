import { GrMail } from "react-icons/gr";

export default function Navbar() {
  return (
    <nav className="h-[90px] w-[100%] relative m-10 items-center flex flex-row place-content-between p-10">
      <div className="flex flex-row m-10 items-center justify-center space-x-12">
        <div>
          <h1 className="font-outfit text-4xl text-white">Zyper</h1>
        </div>
        <div>
          <p className="font-inconsolata text-xl text-white mt-4 ml-6 cursor-pointer underline">
            <span className="text-[#7a85ff] font-bold">/</span>home
          </p>
        </div>
        <div>
          <p className="font-inconsolata text-xl text-white mt-4 cursor-pointer underline">
            <span className="text-[#7a85ff] font-bold">/</span>stack
          </p>
        </div>
        <div>
          <p className="font-inconsolata text-xl text-white mt-4 cursor-pointer underline">
            <span className="text-[#7a85ff] font-bold">/</span>portfolio
          </p>
        </div>
        <div>
          <p className="font-inconsolata text-xl text-white mt-4 cursor-pointer underline">
            <span className="text-[#7a85ff] font-bold">/</span>donate
          </p>
        </div>
      </div>
      <div>
        <div className="m-10 h-10 w-40 bg-[#616dff] flex rounded text-white items-center justify-center cursor-pointer font-outfit hover:scale-105 ease-in duration-200 underline">
          <GrMail className="mr-2" />
          Contact Me
        </div>
      </div>
    </nav>
  );
}
