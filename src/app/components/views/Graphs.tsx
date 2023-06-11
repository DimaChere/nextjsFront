// COMPONENTS
import Diagramm from "./Diagramm";
import Image from "next/image";
// ICONS
import graph1 from "../../../pictures/graphs/graph1.svg";
import graph2 from "../../../pictures/graphs/graph2.svg";
import graph3 from "../../../pictures/graphs/graph3.svg";
import linear from "../../../pictures/graphs/linear.svg";
import sircle1 from "../../../pictures/graphs/sircle1.svg";
import sircle2 from "../../../pictures/graphs/sircle2.svg";
import sircleGroup from "../../../pictures/graphs/sircleGroup.svg";
export default function Graphs() {
  return (
    <div className="relative h-[240px] sm:h-[521px] sm:w-[60vw]">
      <Image
        src={graph1}
        alt="graph1"
        className="box-border border border-gray-500 rounded-md px-[13px] py-[15px] bg-black absolute top-32 -left-[28px] w-[144px] sm:top-0 sm:left-[330px] sm:w-[252px] sm:p-[24px] sm:rounded-[15px]"
      />
      <Image
        src={graph2}
        alt="graph2 with blue dots"
        className="box-border border border-gray-500 rounded-md px-[11px] py-[13px] bg-black absolute w-[90px] top-[28px] right-[90px] z-10 sm:w-[193px] sm:rounded-[15px] sm:px-[23px] sm:pb-[24px] sm:pt-[28px] sm:right-[369px] sm:top-[293px]"
      />
      <Image
        src={sircle1}
        alt="sircle diagram"
        className="box-border border border-gray-500 rounded-md px-[15px] py-[13px] bg-black absolute w-[85px] top-0 right-[10px] sm:w-[182px] sm:rounded-[15px] sm:px-[32px] sm:py-[29px] sm:right-[200px] sm:top-[183px]"
      />

      <Image
        src={sircle2}
        alt="multiple sircles"
        className="absolute top-[40px] left-[36px] sm:w-[233px] sm:left-[150px] sm:top-[183px]"
      />

      <Image
        src={sircleGroup}
        alt="coll group of sircle iagram"
        className="absolute bottom-0 right-[-82px] sm:w-[280px] sm:right-[114px]"
      />

      <Image
        src={linear}
        alt="linear diagram"
        className="box-border border border-gray-500 rounded-md px-[9px] py-[12px] bg-black absolute top-[105px] left-[134px] w-[90px] sm:w-[193px] sm:px-[19px] sm:py-[27px] sm:rounded-[15px] sm:top-[393px] sm:left-[206px]"
      />

      <Image
        src={graph3}
        alt="linear diagram"
        className="hidden box-border border border-gray-500 rounded-md bg-black absolute sm:block sm:w-[192px] sm:p-[26px] sm:rounded-[15px] sm:top-[249px] sm:left-[18px]"
      />
    </div>
  );
}
