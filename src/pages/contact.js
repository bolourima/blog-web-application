import { Inter } from "next/font/google";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-[643px] m-auto mt-[100px] mb-[100px]">
        <p className="text-4xl font-semibold mb-5">Contact Us</p>
        <p className="text-[#696A75] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
        <div className="flex gap-12 mb-8">
          <div className="border-solid border-[#E8E8EA] border-[1px] rounded-xl p-4 w-[294px]">
            <p className="text-2xl mb-[10px]">Address</p>
            <p className="text-[#696A75]">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="border-solid border-[#E8E8EA] border-[1px] rounded-xl p-4 w-[294px]">
            <p className="text-2xl mb-[10px]">Contact</p>
            <p className="text-[#696A75]">313-332-8662</p>
            <p className="text-[#696A75]">info@email.com</p>
          </div>
        </div>
        <div className="flex m-auto justify-center w-[643px] bg-[#F6F6F7] py-7 rounded-xl">
          <div className="">
            <p className="font-semibold text-lg mb-7">Leave a Message</p>
            <div className="flex gap-6 mb-5">
              <input
                type="text"
                placeholder="Your name"
                className="w-[225px]"
              ></input>
              <input
                type="text"
                placeholder="Your Email"
                className="w-[225px]"
              ></input>
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-[478px] mb-5"
            ></input>
            <div>
              <input
                type="text"
                placeholder="Write a message"
                className="min-h-[134px] w-[478px]"
              ></input>
            </div>

            <button>Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
}
