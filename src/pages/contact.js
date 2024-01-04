import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <div className="ml-4 lg:w-[643px] m-auto mt-8 lg:mt-[100px] mb-[100px]">
        <p className="text-2xl lg:text-4xl font-semibold mb-5">Contact Us</p>
        <p className="text-[#696A75] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
        <div className="flex gap-12 mb-8">
          <div className="border-solid border-[#E8E8EA] border-[1px] rounded-xl p-4 lg:w-[294px]">
            <p className="lg:text-2xl mb-[10px]">Address</p>
            <p className="text-[#696A75]">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="border-solid border-[#E8E8EA] border-[1px] rounded-xl p-4 lg:w-[294px]">
            <p className="lg:text-2xl mb-[10px]">Contact</p>
            <p className="text-[#696A75]">313-332-8662</p>
            <p className="text-[#696A75]">info@email.com</p>
          </div>
        </div>
        <div className="flex m-auto justify-center lg:w-[643px] bg-[#F6F6F7] lg:py-7 rounded-xl">
          <div className="">
            <p className="mt-4 font-semibold text-lg mb-7">Leave a Message</p>
            <div className="flex flex-col lg:flex gap-6 mb-5 h-9">
              <input
                type="text"
                placeholder="Your name"
                className="pl-3 w-[250px] lg:w-[225px] rounded-[5px]"
              ></input>
              <input
                type="text"
                placeholder="Your Email"
                className="pl-3 w-[250px] lg:w-[229px] rounded-[5px]"
              ></input>
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="pl-3 mt-8 w-[250px] lg:w-[478px] mb-5 rounded-[5px] h-9"
            ></input>
            <div>
              <input
                type="text"
                placeholder="Write a message"
                className="pl-3 w-[250px] min-h-[134px] lg:w-[478px] rounded-[5px]"
              ></input>
            </div>

            <button className=" mt-7 w-[130px] h-10 rounded-md bg-[#4B6BFB] text-white">Send Message</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
