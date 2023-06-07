import Image from "next/image";
// IMAGES
import phone from "../../../pictures/phones/phone.svg";
import phoneBig from "../../../pictures/phones/APhoneBig.svg";
import line from "../../../pictures/line.svg";

export default function AStart() {
  return (
    <div className="relative w-full flex items-center h-[450px]">
      {/* Text */}
      <div className="z-20 ml-[7vw] w-[70%] sm:w-[60%]">
        <p className="font-bold text-[35px] leading-[40px] sm:text-[64px] sm:leading-[70px] mb-6 sm:mb-[88px]">
          A platform <br /> that works smarter
        </p>
        <div className="relative flex flex-row items-center">
          <Image className="hidden sm:block" src={line} alt="Line" />
          <p className="text-[16px] leading-[22px] sm:text-[20px] sm:leading-[27px] sm:w-[55%]">
            NoTab allows bars & nightclubs to mnage, understand, and grow their
            buisness from a single dashboard
          </p>

          <div className="absolute left-[-25vw] sm:left-0 bottom-0 sm:bottom-6 w-40 h-40 sm:w-[125px] sm:h-[125px] rounded-full bg-gradient-radial from-[#605CEA] to-[rgba(96, 92, 234, 0.5)] opacity-30 sm:opacity-50 blur-2xl"></div>
        </div>
      </div>

      <div className="absolute right-[-40vw] sm:right-0 top-[-85px] w-[463px] h-[463px] -rotate-[50deg] bg-gradient-radial from-[#fa00ff] to-black opacity-30 blur-2xl"></div>

      {/* Picture */}

      <Image
        className="absolute sm:hidden top-[35px] right-0 dark:drop-shadow-[0_0_0.3rem_#000]"
        src={phone}
        alt="Phone"
        height={400}
        priority
      />
      <Image
        className="hidden sm:block dark:drop-shadow-[0_0_0.3rem_#000]"
        src={phoneBig}
        alt="Phone"
        height={667}
        priority
      />
    </div>
  );
}
