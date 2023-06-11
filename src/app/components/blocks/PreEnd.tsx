import Image from "next/image";

// COMPONENTS

// Images
import ramka from "../../../pictures/phones/phoneRamka.png";
import screen from "../../../pictures/phones/phoneScreen.png";
import bg from "../../../pictures/notabBG2.svg";

export default function PreEnd() {
  return (
    <>
      <div className="hidden sm:flex sm:items-center sm:justify-center">
        <Image src={bg} alt="background" className="" />
        <Image src={ramka} alt="ramka" className="absolute " />
        <Image src={screen} alt="screen" className="absolute" />
      </div>
    </>
  );
}
