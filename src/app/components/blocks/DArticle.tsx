import Image from "next/image";

// IMAGES
import guy from "../../../pictures/images/guy.png";
import phonver1 from "../../../pictures/phones/phoneVer1.svg";
import phonver2 from "../../../pictures/phones/phoneVer2.svg";

export default function DArticle() {
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black via-transparent to-black z-20"></div>
        <Image src={guy} alt="guy" className="z-10" />
        <h2 className="absolute bottom-0 left-0 text-[6vw] font-semibold z-30 ml-4">
          ID SCANER
        </h2>
      </div>
      <div className="px-4 w-[90%] mb-24">
        <p className="relative text-[3.5vw] mt-3">
          Scan, verify, and collect data on each person that walks through your
          door to humanize your data. You also get a digital 86 list as well as
          a citywide ban list to keep your venue safe.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center px-9">
        <Image src={phonver1} alt="Верификация1" className="mb-20" />
        <Image src={phonver2} alt="Верификация2" className="mb-24" />
      </div>
    </>
  );
}
