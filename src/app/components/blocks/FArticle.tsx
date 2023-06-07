import Image from "next/image";
import styles from "../../styles/page.module.css";

// IMAGES
import phoneQR from "../../../pictures/phones/phoneQR.svg";
import bgtext from "../../../pictures/bgText.svg";
import arrow from "../../../pictures/arrow.svg";
import phonecarpet from "../../../pictures/phones/phoneCarpet.svg";
//COMPONENTS
import TextWithBorder from "../TextWithBorder";

export default function FArticle() {
  return (
    <>
      <div className="px-4 w-[90%] mb-24">
        <h2 className={styles.headline}>Generate your QR-code</h2>
        <p className="relative text-[4vw] w-[90%]">
          The guest QR code is scanned <br /> by the staff and automatically
          sent
        </p>
      </div>
      <div className="relative flex justify-center items-center pb-20">
        <Image src={bgtext} alt="текст на заднем фоне" className="absolute" />
        <div className="absolute rounded-full bg-gradient-radial from-[#F101BF] to-[#0066FF] blur-md  w-[90%] h-[85vw] opacity-10 z-10"></div>
        <Image
          src={phoneQR}
          alt="phone with QR-code"
          width={160}
          className="z-20"
        />
        <Image
          src={arrow}
          alt="стрелка"
          className="absolute bottom-7 right-6"
        />
        <h2 className="headline absolute bottom-0 right-6 font-bold">
          Scan QR-code
        </h2>
      </div>

      <div className="px-4 w-[90%] mb-24">
        <h2 className={styles.headline}>
          Easier ordering. <br /> Happier guests.
        </h2>
        <p className="relative text-[3.9vw]">
          NoTab makes it simple for patrons to easily
        </p>
      </div>
      <div className="relative py-16">
        <div className="absolute rounded-full right-[-45vw] top-[-10vw] w-[90%] h-[90vw] rotate-[5deg] bg-gradient-radial from-[#F101BF] to-[#0066FF] opacity-10 blur-2xl"></div>
        <Image
          src={phonecarpet}
          alt="телефон-кавер"
          width={280}
          className="z-20"
        />
        <div className="absolute top-[0%] left-[11%]">
          <TextWithBorder content="No more lost or forgotten credit cards" />
        </div>
        <div className="absolute top-[17%] right-[5%]">
          <TextWithBorder content="No more lost or forgotten credit cards" />
        </div>
        <div className="absolute bottom-[20%] left-[5%]">
          <TextWithBorder content="Skip the line" />
        </div>
        <div className="absolute bottom-0 right-[5%]">
          <TextWithBorder content="No more split your tab" />
        </div>
      </div>
    </>
  );
}
