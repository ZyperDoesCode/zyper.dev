import Navbar from "../../components/navbar/component";
import Image from "next/image";
import HomepageImage from "../../../../public/homepage-image.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="flex flex-row w-full bg-white h-full mt-16">
        <div className="flex flex-1 bg-black p-20 text-2xl flex-col">
          <p className="text-white font-outfit">Hey I'm,</p>
          <h1 className="text-white text-6xl font-josefinsans ml-[-4px] mt-3">
            Nithish Pravin
          </h1>
          <h3 className="text-white text-xl font-raleway ml-[-1px]">
            ( Also Known as:{" "}
            <span className="text-white text-xl font-kronaone">Zyper</span> )
          </h3>
          <p className="text-white text-[20px] mt-6 text-left">
            I'm a software developer from India with over
            <br />
            six years of experience in FullStack and
            <br />
            backend development.
          </p>
        </div>
        <div className="flex flex-1 bg-black items-left">
            <Image
              src={HomepageImage}
              className="hidden md:hidden lg:block lg:h-[500px] lg:w-[500px] rounded-lg"
            />
        </div>
      </div>
    </main>
  );
}
